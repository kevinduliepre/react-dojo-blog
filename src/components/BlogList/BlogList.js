import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

import "./BlogList.css";

const BlogList = ({ blogs, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {/* <div className="blog-list"> */}

        {blogs.map((blog) => (
          <div key={blog.id}>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <p className="author">Written by {blog.author}</p>
                  <Card.Text className="text-muted">
                    {/* Some quick example text to build on the card title and make up the bulk of
                                            the card's content. */}
                    {blog.body.substr(0, 70) + " ..."}
                  </Card.Text>
                  <Link className="btn btn-primary" to={`/blogs/${blog.id}`}>
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </>
  );
};

export default BlogList;
