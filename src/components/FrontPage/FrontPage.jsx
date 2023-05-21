import { Col, Container, Row } from "react-bootstrap"
import FormikSearch from "@/FormikSearch/FormikSearch"
import Logo from "@/Logo/Logo"
import useSearchSubmit from "@hooks/use-searchSubmit"


const FrontPage = () => {

    const { onSearch } = useSearchSubmit()

    return (
        <Container>
            <Row className="justify-content-center">
                <Col sm={10}>
                    <div className="bg-secondary d-flex flex-column py-5 my-5 rounded shadow-lg">
                        <Logo style={{ maxWidth: 200 }} className="mx-auto" />
                        <Container>
                            <Row className="justify-content-center">
                                <Col sm={6}>
                                    <div className="py-3">
                                        <FormikSearch onSubmit={onSearch} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>  
    )
}

export default FrontPage