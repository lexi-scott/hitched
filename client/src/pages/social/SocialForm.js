import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import auth from "../../utils/auth";
import ImageUploading from "react-images-uploading";
import { QUERY_POSTS } from "../../utils/queries";

export default function SocialForm() {
  //BOOTSTRAP MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //MUTATION FOR ADDING POST
  const [addPost, { error, data }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [...posts, addPost] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const [formPost, setFormPost] = useState({
    postAuthor: "",
    content: "",
    image: null,
  });

  const handlePostChange = (e) => {
    e.preventDefault();

    const token = auth.loggedIn() ? auth.getToken() : null;
    if (!token) {
      return false;
    }

    const { value } = e.target;
    //this will take the author and the content
    setFormPost({
      ...formPost,
      postAuthor: auth.getProfile().data.username,
      content: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //IF THERES AN IMAGE PUT THE DATA, IF NOT SET NULL
    const uploadImage = images[0] !== undefined ? images[0].data_url : null;

    try {
      const { data } = await addPost({
        variables: { ...formPost, image: uploadImage },
      });
      //close the modal
      handleClose();
    } catch (err) {
      console.error(err);
    }

    setFormPost({
      postAuthor: "",
      content: "",
      image: "",
    });
  };

  //IMAGE UPLOADING
  const [images, setImages] = useState([]);
  const maxNumber = 1000;
  const maxSize = 100000000;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);

    setImages(imageList);
  };

  console.log(images);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Post
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>What's on your mind?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              onChange={handlePostChange}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Post here</Form.Label>
              <Form.Control name="content" as="textarea" rows={3} />
            </Form.Group>
          </Form>

          {/* COMPONENT FOR IMAGE UPLOADING */}
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            maxFileSize={maxSize}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <Button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </Button>
                &nbsp;
                <Button onClick={onImageRemoveAll}>Remove all images</Button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={image["data_url"]}
                      alt=""
                      style={{ width: "50%", margin: "auto" }}
                    />
                    <div className="image-item__btn-wrapper">
                      <Button onClick={() => onImageUpdate(index)}>
                        Update
                      </Button>
                      <Button onClick={() => onImageRemove(index)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
