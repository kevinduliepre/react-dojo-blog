import { Card, Badge, Row, Col } from 'react-bootstrap'

const CategoryList = ({ categories }) => {


    return (
        <div className='category-list'>
            {/* <h2>{ description }</h2> */}
            
            <Row> 
                { categories.map((category) => (
                        <div key={category.id}> 

                            <Col>
                                <Badge variant="secondary">{ category.description }</Badge> 
                            </Col>   
                        </div>
                    ))
                }
            </Row>
        </div>
    )
}

export default CategoryList
