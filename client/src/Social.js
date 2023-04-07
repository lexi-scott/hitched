import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { QUERY_USERS } from "./utils/queries";
import { ADD_POST } from "./utils/mutations";

import auth from "./utils/auth";
const users = [
  {
    name: "Deorren",
    comment: "Test Comment ",
  },
  {
    name: "Rima",
    comment: "Test Comment 2",
  },
  {
    name: "Adana",
    comment: "Test Comment 3",
  },
  {
    name: "Lexi",
    comment: "Test Comment 4",
  },
];

export default function Social() {
  // const { data, loading } = useQuery(QUERY_USERS);

  // const test = data?.users || [];
  // console.log(test);
  const [post, setPost] = useState("");

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = auth.getProfile().data.id;
    try {
      const data = await addPost({
        variables: { userId, post },
      });

      setPost("");

      console.log("Post created successfully");
    } catch (err) {
      console.error(err);
    }
  };

  if (error) console.error(error);

  return (
    <div className="container-fluid w-75 social-page d-flex flex-column ">
      <h1>Social Page</h1>
      <div className="user-inputs d-flex">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Whats on your mind..."
            aria-label="post"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
          <Button
            variant="outline-primary"
            id="button-addon1"
            onClick={handleSubmit}
          >
            Send Post
          </Button>
        </InputGroup>
      </div>
      <div className="posts-container d-flex flex-column">
        <ul class="list-group list-group-flush">
          {users.map((user) => {
            return (
              <li class="list-group-item">
                <>{user.name}</>
                <br />
                <>{user.comment}</>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
