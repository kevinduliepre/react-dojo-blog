import { Container } from 'react-bootstrap'

import useFetch from '../../useFetch'
import BlogList from '../BlogList'

function Home() {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    

    return (
        <Container>
            <div className="home">
                { error && <div>{ error } </div>}
                { isPending && <div>Loading...</div>}
                { blogs && 
                        <BlogList blogs={ blogs } title=" All Blogs " />
                }
            </div>
        </Container>
    )
}

export default Home
