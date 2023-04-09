import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import auth from "../../utils/auth";
import ImageUploading from "react-images-uploading";

export default function SocialForm() {
  //BOOTSTRAP MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //MUTATION FOR ADDING POST
  const [addPost, { error, data }] = useMutation(ADD_POST);
  const [formPost, setFormPost] = useState({
    postAuthor: "",
    content: "",
    image: "",
  });

  const handlePostChange = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    const { value } = e.target;
    ///REPLACE POST AUTHOR ONCE LOG IN AUTHENTICATION IS SET UP
    setFormPost({
      ...formPost,
      postAuthor: "testUser",
      content: value,
    });
  };

  const handleSubmit = async () => {
    console.log(formPost);

    try {
      const { data } = await addPost({
        variables: { ...formPost, image: images[0]?.data_url },
      });
      window.location.reload();
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
