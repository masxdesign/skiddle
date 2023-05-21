import useSearchSubmit from "@hooks/use-searchSubmit"
import { useEffect, useState } from "react"
import EventsResults from "@/EventsResults/EventsResults"
import showMoreEventsAsync from "services/showMoreEventsAsync"

const initialData = { pagecount: 20, totalcount: 0, results: [] }

const EventsPage = () => {

    const [offset, setOffset] = useState(0)
    const [data, setData] = useState(initialData)
    const [loading, setLoading] = useState(true)
    
    const {
        keyword
    } = useSearchSubmit()

    const requestAsync = async (keyword, offset, previousData) => {

        setLoading(true)

        const events = await showMoreEventsAsync(keyword, offset, previousData)

        setData(events)
        setLoading(false)

    }

    useEffect(() => {
        setLoading(true)
        setOffset(0)
        setData(initialData)
        requestAsync(keyword, 0, initialData)
    }, [keyword])

    const { pagecount, totalcount, results, showMore } = data

    const handleShowMore = () => {
        const newOffset = offset + pagecount
        setOffset(newOffset)
        requestAsync(keyword, newOffset, data)
    }

    return (
        <>
            {loading ? (
                <small className="text-muted">Searching...</small>
            ) : (
                <b className="text-muted small">
                    {totalcount} events
                </b>
            )}
            <h1>{keyword}</h1>
            <hr/>
            <EventsResults 
                keyword={keyword}
                totalcount={totalcount} 
                pagecount={pagecount}
                results={results} 
                isFullLoading={initialData === data} 
                isLoading={loading} 
                showMoreButton={showMore} 
                onShowMore={handleShowMore}
            />
        </>
    )
}

export default EventsPage