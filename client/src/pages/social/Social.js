import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup";

import { QUERY_POSTS } from "../../utils/queries";
import SocialForm from "./SocialForm";
import { AddComment } from "./AddComment";
import auth from "../../utils/auth";

export default function Social() {
  const { data, loading, error } = useQuery(QUERY_POSTS);
  //GETTING ALL THE DATA FROM POST
  const postData = data?.posts || [];

  console.log(postData);
  if (!auth.loggedIn()) {
    return <h1 className="d-flex flex-row justify-content-center">Access Denied!, please log in </h1>
  }

  if (loading) return <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  console.log(postData);

  return (
    <div className="container-fluid w-75 social-page d-flex flex-column ">
      <div className="d-flex mb-3">
        <SocialForm />
      </div>
      <div className="posts-container d-flex flex-column">
        {postData.length === 0 ? (
          <h1 style={{ color: "white" }}>Looks empty in here...</h1>
        ) : (
          <Row xs={1} md={2} className="g-4 ">
            {postData.map((post) => {
              return (
                <>
                  <Col>
                    <Card>
                      {post.image ? (
                        <Card.Img
                          variant="top"
                          src={post.image}
                          className="post-image"
                        />
                      ) : null}

                      <Card.Body>
                        <Card.Title>{post.postAuthor}</Card.Title>

                        <Card.Text>{post.content}</Card.Text>
                        <Card.Text>{post.createdAt}</Card.Text>
                        <Card.Text>Comments</Card.Text>
                        <ListGroup
                          variant="flush"
                          className="overflow-auto"
                          style={{ height: "12rem" }}
                        >
                          {post.comments.length === 0 ? (
                            <Card.Text>"be the first to comment.."</Card.Text>
                          ) : (
                            post.comments.map((comment) => {
                              return (
                                <ListGroup.Item>
                                  {comment.commentText} by{" "}
                                  {comment.commentAuthor}
                                </ListGroup.Item>
                              );
                            })
                          )}
                        </ListGroup>
                        <AddComment postId={post._id} />
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        )}
      </div>
    </div>
  );
}
