import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'

const Create = () => {

    const [title, setTitle] = useState('') 
    const [body, setBody] = useState('') 
    const [author, setAuthor] = useState('mario') 
    const [isPending, setIsPending] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }

        setIsPending(true)

        fetch('http://localhost:8000/blogs', { 
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Success')
            setIsPending(false)

            // history.go(-1)
            history.push('/')
        })
    }

    return (
        <div className="create" style={{width:'500px'}}>
            <h2 className='mb-4'>Add a new Content</h2>
            <Form onSubmit={ handleSubmit } className='w-100' >
                <Form.Group>
                    <Form.Label>Blog title:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Blog Title Here"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Blog body:</Form.Label>
                    <Form.Control 
                        as="textarea"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}    
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Blog author:</Form.Label>
                    <Form.Control 
                        as="select"
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">Mario</option>
                        <option value="yoshi">Yoshi</option>
                    </Form.Control>
                </Form.Group>
                

                {!isPending && <Button variant="primary" type="submit" block>Add Blog</Button>}
                {isPending && <Button variant="success" type="submit" block>Adding Blog...</Button>}
            </Form>
        </div>
    )
}

export default Create
