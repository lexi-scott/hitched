import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { QUERY_POSTS } from "../../utils/queries";
import SocialForm from "./SocialForm";

export default function Social() {
  const { data, loading, error } = useQuery(QUERY_POSTS);
  //GETTING ALL THE DATA FROM POST
  const postData = data?.posts || [];

  if (loading) return <h1>Loading...</h1>;

  if (error) console.error(error);

  console.log(postData);

  return (
    <div className="container-fluid w-75 social-page d-flex flex-column ">
      <div className="user-inputs d-flex">
        <SocialForm />
      </div>
      <div className="posts-container d-flex flex-column">
        {postData.length === 0 ? (
          <h1 style={{ color: "white" }}>Looks empty in here...</h1>
        ) : (
          <CardColumns>
            {postData.map((post) => {
              return (
                <Card key={post._id} border="dark">
                  {post.image ? (
                    <Card.Img
                      src={post.image}
                      variant="top"
                      style={{ width: "12rem" }}
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{post.postAuthor}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <Card.Text>{post.createdAt}</Card.Text>
                    <Button className="btn-block btn-danger">Comment</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        )}
      </div>
    </div>
  );
}
