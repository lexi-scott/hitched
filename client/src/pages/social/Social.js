import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { QUERY_USERS } from "../../utils/queries";
// import { ADD_POST } from "../../utils/mutations";
const users = [
  {
    name: "Deorren",
    postContent: "Test Comment ",
  },
  {
    name: "Rima",
    postContent: "Test Comment 2",
  },
  {
    name: "Adana",
    postContent: "Test Comment 3",
  },
  {
    name: "Lexi",
    postContent: "Test Comment 4",
  },
];

export default function Social() {
  const { data, loading, error } = useQuery(QUERY_USERS);

  const test = data?.users || [];
  console.log(data);
  const [post, setPost] = useState({
    name: "",
    postContent: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.push(post);

    console.log(users);
  };

  return (
    <div className="container-fluid w-75 social-page d-flex flex-column ">
      <div className="user-inputs d-flex">
        <InputGroup className="mb-3">
          <Form.Control
            name="postContent"
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
                <>{user.postContent}</>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
