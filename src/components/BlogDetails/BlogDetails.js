import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../useFetch";

import "./BlogDetails.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import { HiOutlineTrash } from "react-icons/hi";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <Container>
      <div className="blog-details">
        {isPending && <div>Loading ...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <Row className="d-flex justify-content-between">
              <h2>{blog.title}</h2>
              <Button variant="danger" onClick={handleClick}>
                <HiOutlineTrash className="trash" />
              </Button>
            </Row>
            <p className="mb-5 text-muted author">Written by {blog.author}</p>
            <div>{blog.body}</div>
          </article>
        )}
      </div>
    </Container>
  );
};

export default BlogDetails;
