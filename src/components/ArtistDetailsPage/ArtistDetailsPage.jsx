import Loading from "@/Loading/Loading"
import { isEmpty } from "lodash"
import { useEffect, useState } from "react"
import { Col, Container, ProgressBar, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import fetchArtistDetailsAsync from "services/fetchArtistDetailsAsync"

const ArtistDetailsPage = () => {

    const { artistId } = useParams()

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        const request = async () => {

            setLoading(true)

            const data = await fetchArtistDetailsAsync(artistId)
            setData(data)

            setLoading(false)

        }

        request()

    }, [])

    const { results } = data

    return loading ? (
        <Loading />
    ) : (
        <div>
            <p>
                <Link to={-1} className="text-muted small">Back</Link>
            </p>
            <Container className="px-0">
                <Row>
                    <Col sm={8}>
                        <h1 className="mb-4">{results.name}</h1>
                        <div className="mb-3">
                            {!isEmpty(results.spotifyartisturl) && (
                                <span className="me-1">
                                    <SocialIcon url={results.spotifyartisturl} />
                                </span>
                            )}
                            {!isEmpty(results.twitter) && (
                                <SocialIcon url={`https://twitter.com/${results.twitter}`} />
                            )}
                        </div>
                        <div className="w-50 mb-4">
                            <b className="mb-2 d-inline-block text-muted">
                                {results.spotifyPopularity}% Spotify popularity
                            </b>
                            <ProgressBar variant="primary" now={results.spotifyPopularity} />
                        </div>
                        <p className="text-muted">{results.description}</p>
                    </Col>
                    <Col sm={4}>
                        <div style={{
                            backgroundImage: `url(${results.imageurl})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            width: "100%",
                            paddingTop: "100%",
                            borderRadius: 20
                        }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ArtistDetailsPage