import useFetch from '../../useFetch'
import BlogList from '../BlogList'

function Home() {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    

    return (
        <div>
            <div className="home">
                { error && <div>{ error } </div>}
                { isPending && <div>Loading...</div>}
                {blogs && <BlogList blogs={ blogs } title=" All Blogs " />}
            </div>
        </div>
    )
}

export default Home
