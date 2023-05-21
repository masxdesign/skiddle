import ArtistsList from "@/ArtistsList/ArtistsList"
import InteractiveMap from "@/InteractiveMap/InteractiveMap"
import Loading from "@/Loading/Loading"
import { CalendarDaysIcon, ClockIcon, MapPinIcon, UserIcon } from "@heroicons/react/20/solid"
import classNames from "classnames"
import { isEmpty } from "lodash"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import fetchEventDetailsAsync from "services/fetchEventDetailsAsync"
import isColorLight from "utils/isColorLight"

const EventDetailsPage = () => {
    const { eventId } = useParams()

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        const request = async () => {

            setLoading(true)

            const data = await fetchEventDetailsAsync(eventId)
            setData(data)

            setLoading(false)

        }

        request()

    }, [])

    const { results } = data

    return loading ? (
        <Loading />
    ) : (
        <>
            <p>
                <Link to={-1} className="text-muted small">Back to list</Link>
            </p>
            <div 
                className={classNames("p-3 rounded mb-4", isColorLight(results.headerhex) ? "text-dark": "text-white")} 
                style={{ 
                    backgroundColor: isEmpty(results.headerhex) ? "teal": results.headerhex 
                }}
            >
                <Container>
                    <Row>
                        <Col>
                            <div className="py-3">
                                <h1 className="h2 mb-4">{results.eventname}</h1>
                                <div className="mb-1">
                                    <MapPinIcon height={18} /> {results.venue.name}, {results.venue.town}
                                </div>
                                <div className="mb-1">
                                    <CalendarDaysIcon height={18} /> {results.rangeDate}
                                </div>
                                <div className="mb-1">
                                    <ClockIcon height={18} /> {results.openingtimes.doorsopen} til {results.openingtimes.doorsclose}
                                </div>
                                {results.MinAge > 0 && (
                                    <div className="mb-1"><UserIcon height={18} /> Minimum Age: {results.MinAge}</div>
                                )}
                            </div>
                        </Col>
                        <Col sm={4} className="text-end">
                            <img src={results.largeimageurl} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col sm={8}>
                        <div className="py-3">
                            <div className="mb-5">
                                <h2 className="h5">{results.eventname} on {results.startdate}</h2>
                                <p>{results.description}</p>
                                {results.genres.length > 0 && (
                                    <p>
                                        <b>Music genres: </b>
                                        {results.genres.map(({ genreid, name }, index) => (
                                            <span key={genreid} className="mr-1">{index === 0 ? "": ", "}{name}</span>
                                        ))} 
                                    </p>
                                )}
                            </div>
                            <div className="mb-5">
                                <h2 className="h5">Entry prices</h2>
                                {results.MinAge > 0 && (
                                    <div>Minimum Age: {results.MinAge}</div>
                                )}
                                <p>Entry price ({results.eventVisibility}): {results.entryprice} <small className="text-muted">(Additional fees may apply)</small></p>
                            </div>
                            <div className="mb-4">
                                <h2 className="h5">{results.venue.name}</h2>
                                <div className="mb-4">
                                    <InteractiveMap 
                                        position={[results.venue.latitude, results.venue.longitude]}
                                        markerText={results.venue.name}
                                        height={300}
                                    />
                                </div>
                                <p>
                                    <u>{results.venue.name}</u><br/>
                                    {results.venue.address}<br/>
                                    {results.venue.cityname}<br/>
                                    {results.venue.town}<br/>
                                    {results.venue.postcode}<br/>
                                    {!isEmpty(results.venue.phone) && (
                                        <>
                                            Tel: {results.venue.phone}
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        {results.artists.length > 0 && (
                            <div className="bg-light p-3 border rounded">
                                <h3 className="h6 mb-4">Artists</h3>
                                <ArtistsList list={results.artists} />
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EventDetailsPage