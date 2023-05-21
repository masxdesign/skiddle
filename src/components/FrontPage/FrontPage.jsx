import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import FormikSearch from "@/FormikSearch/FormikSearch"
import Logo from "@/Logo/Logo"
import useSearchSubmit from "@hooks/use-searchSubmit"

const RedirectFixGitHubPagesSPA = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
    
        const path = window.localStorage.getItem('path')
    
        if(path) {
            localStorage.removeItem('path')
            const location = JSON.parse(path)
            navigate(location, { replace: true })
        }
    
    }, [])

    return null
} 

const FrontPage = () => {

    const { onSearch } = useSearchSubmit()

    return (
        <>
            <RedirectFixGitHubPagesSPA />
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
        </>
    )
}

export default FrontPage