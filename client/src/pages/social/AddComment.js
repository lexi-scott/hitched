import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { useState } from "react";
import auth from "../../utils/auth";
export function AddComment({ postId }) {
  // REPLACE WHEN AUTH LOG IN IS AVAILABLE

  // const tempUser = "TEMPUSER";

  const [commentForm, setCommentForm] = useState({
    commentAuthor: "",
    commentText: "",
    postId: postId,
  });

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  if (error) console.error(error);

  const handleChange = (e) => {
    setCommentForm({ ...commentForm, commentText: e.target.value });
  };

  console.log(commentForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = auth.loggedIn() ? auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      const { data } = await addComment({
        variables: {
          ...commentForm,
          commentAuthor: auth.getProfile().data.username,
        },
      });
      window.location.reload();
      setCommentForm({
        commentText: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="enter comment here..."
          onChange={handleChange}
        />
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
