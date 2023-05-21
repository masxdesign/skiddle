import { Col, Container, Row } from "react-bootstrap"
import GridItem from "./GridItem"
import { Link } from "react-router-dom"

const GridItemCol = ({ children }) => (
    <Col md={6} lg={4} xl={3} className="mb-3">
        {children}
    </Col>
)

const Grid = ({ results, isLoading, pagecount = 8, keyword }) => (
    <Container className="px-0">
        <Row>
            {results?.map((item) => (
                <GridItemCol key={item._id}>
                    <Link to={`/event/${item.id}`} state={{ keyword }}>
                        <GridItem data={item} />
                    </Link>
                </GridItemCol>
            ))}
            {isLoading && (
                <>
                    {Array(pagecount).fill(null).map((_, index) => (
                        <GridItemCol key={index}>
                            <GridItem />
                        </GridItemCol>
                    ))}
                </>
            )}
        </Row>
    </Container>
)

export default Grid