import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'

const BlogList = ({ blogs, title }) => {

    return (
        <div className='blog-list'>
            <h2>{ title }</h2>
            
            <Row>
                { blogs.map((blog) => (
                        <div key={blog.id}> 
                            <Col>
                                <Card style={{ width: '18rem'}}>
                                    <Card.Body>
                                        <Card.Title>{ blog.title }</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Written by { blog.author }</Card.Subtitle>
                                        <Card.Text>
                                            {/* Some quick example text to build on the card title and make up the bulk of
                                            the card's content. */}
                                            { blog.body.substr(0, 85) + ' ...' }
                                        </Card.Text>
                                        <Link className="btn btn-primary" to={ `/blogs/${ blog.id }` }>Read More</Link>
                                    </Card.Body>
                                </Card>  
                            </Col>   
                        </div>
                    ))
                }
            </Row>
        </div>
    )
}

export default BlogList
