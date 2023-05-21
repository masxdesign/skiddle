import { Col, Container, Row, Spinner } from "react-bootstrap"
import useSearchSubmit from "@hooks/use-searchSubmit"
import PageTopBar from "@/PageTopBar/PageTopBar"
import { Outlet } from "react-router-dom"
import { Suspense, useMemo } from "react"

const MainPage = () => {
    const {
        onSearch,
        keyword
    } = useSearchSubmit()

    const searchInitialValues = useMemo(() => ({
        search: keyword
    }), [keyword])

    return (
        <>
            <PageTopBar 
                searchInitialValues={searchInitialValues}
                onSearch={onSearch}
            />
            <Container>
                <Row>
                    <Col>
                        <div className="py-4">
                            <Suspense 
                                fallback={
                                    <div className="text-center py-5">
                                        <Spinner animation="border" variant="secondary" />
                                    </div>
                                }
                            >
                                <Outlet />
                            </Suspense>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainPage