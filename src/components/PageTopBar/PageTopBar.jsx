import FormikTopBarSearch from "@/FormikTopBarSearch/FormikTopBarSearch"
import Logo from "@/Logo/Logo"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const PageTopBar = ({ searchInitialValues, onSearch, isSearching }) => (
    <div className="bg-dark">
        <Container fluid>
            <Row>
                <Col sm={5} md={4} lg={4} xl={3} className="d-flex justify-content-center justify-content-sm-start">
                    <Link to="/">
                        <Logo variant="landscape" height={80} className="mx-auto" />
                    </Link>
                </Col>
                <Col sm={7} md={6} lg={5} xl={5} className="mb-3 my-sm-auto">
                    <FormikTopBarSearch 
                        initialValues={searchInitialValues}
                        onSubmit={onSearch} 
                        isSearching={isSearching}
                    />
                </Col>
            </Row>
        </Container>
    </div>
)

export default PageTopBar