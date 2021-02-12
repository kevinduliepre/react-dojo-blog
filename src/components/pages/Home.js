import { Container } from 'react-bootstrap'

import useFetch from '../../useFetch'

import BlogList from '../BlogList'
// import CategoryList from '../CategoryList'

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    // const { data: categories } = useFetch('http://localhost:8000/categories')
    

    return (
        <Container>
            
            <div className="home">
                { error && <div>{ error } </div>}
                { isPending && <div>Loading...</div>}
                { blogs && 
                    <>
                        <BlogList blogs={ blogs } title=" All Blogs " className='blog-list' />
                    </>
                }
            </div>
        </Container>
    )
}

export default Home
