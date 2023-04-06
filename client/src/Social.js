import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
  return (
    <div className="container-fluid w-75 social-page d-flex flex-column ">
      <h1>Social Page</h1>
      <div className="user-inputs d-flex">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Whats on your mind..."
            aria-label="post"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-primary" id="button-addon1">
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
