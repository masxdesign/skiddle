import { Col, Container, Row } from "react-bootstrap"
import useSearchSubmit from "@hooks/use-searchSubmit"
import PageTopBar from "@/PageTopBar/PageTopBar"
import { Outlet } from "react-router-dom"
import { Suspense, useMemo } from "react"
import Loading from "@/Loading/Loading"

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
                            <Suspense fallback={<Loading />}>
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