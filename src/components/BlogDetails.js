import { useHistory, useParams } from 'react-router-dom'
import useFetch from '../useFetch'

import { Button, Col, Container, Row } from 'react-bootstrap'

const BlogDetails = () => {

    const  { id } = useParams()
    const {data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)

    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <Container>
        <div className="blog-details">
            { isPending && <div>Loading ...</div> }      
            { error && <div>{error}</div> }
            { blog && (
                <article>
                    <Row>
                        <Col>
                            <h2>{ blog.title }</h2>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }}>
                            <Button variant="danger" onClick={ handleClick }>Delete</Button>
                        </Col>
                    </Row>
                    <p className="mb-5">Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}     
        </div>
        </Container>
    )
}

export default BlogDetails
