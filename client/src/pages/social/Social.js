import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup";
import PageHeader from "../../components/PageHeader";
import { QUERY_POSTS } from "../../utils/queries";
import SocialForm from "./SocialForm";
import { AddComment } from "./AddComment";
import auth from "../../utils/auth";
import Button from 'react-bootstrap/Button'
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../../utils/mutations";
import Like from "./Like";



export default function Social() {

  const { data, loading, error } = useQuery(QUERY_POSTS);

  const [deletePost] = useMutation(DELETE_POST)
  //GETTING ALL THE DATA FROM POST
  const postData = data?.posts || [];
  console.log(postData);
  if (!auth.loggedIn()) {
    return <h1 className="d-flex flex-row justify-content-center">Access Denied!, please log in </h1>
  }

  //CURRENT USER'S EMAIL

  const userEmail = auth.getProfile().data.email

  if (loading) return <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>


  const handleDelete = async (postId) => {

    console.log(postId)
    try {
      const { data } = await deletePost({
        variables: { postId }
      })
      window.location.reload()
    } catch (error) {
      console.error(error)
    }


  }


  return (
    <section className="about">
      <PageHeader title="Social Media" description="Our personal page for wedding" />
      <div className="container-fluid w-75 social-page d-flex flex-column ">
        <div className="d-flex mb-3">
          <SocialForm />
        </div>
        <div className="posts-container d-flex flex-column">
          {postData.length === 0 ? (
            <h1 style={{ color: "white" }}>Be the first to post something!</h1>
          ) : (
            <Row xs={1} md={2} className=" socialPost g-4 ">
              {postData.map((post) => {
                return (
                  <>
                    <Col>
                      <Card>
                        {userEmail === "db@test.com" ? <i class="delBtn fa-regular fa-trash-can" onClick={() => handleDelete(post._id)}></i>
                          : null}
                        {post.image ? (
                          <Card.Img
                            variant="top"
                            src={post.image}
                            className="post-image"
                          />
                        ) : null}

                        <Card.Body>
                          <Card.Text
                            className="postText"
                          >{post.postAuthor}: {post.content}</Card.Text>
                          <Card.Text className="postCreate">{post.createdAt}</Card.Text>

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
                                  <ListGroup.Item className="commentText">
                                    {comment.commentAuthor}: {comment.commentText}

                                  </ListGroup.Item>
                                );
                              })
                            )}
                          </ListGroup>

                          <Card.Text>{post.likes.length} likes</Card.Text>
                          {/* {post.likes ? post.likes.map((like) => {
                            return <ListGroup.Item>{like.name}</ListGroup.Item>
                          }) : null} */}
                          <AddComment postId={post._id} postLikes={post.likes} />

                          <Like postInfo={post} />
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
    </section>
  );
}
