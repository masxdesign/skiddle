import { Button, Spinner } from "react-bootstrap"
import Grid from "./components/Grid"

const views = {
    Grid
}

const EventsResults = ({ variant = "Grid", keyword, totalcount, pagecount, results, isFullLoading, isLoading, showMoreButton, onShowMore }) => {

    const ViewComponent = views[variant]

    console.log(results);

    return (
        isFullLoading && isLoading ? (
            <ViewComponent isLoading={isLoading} pagecount={pagecount} />
        ) : (
            <>
                {totalcount > 0 ? (
                    <ViewComponent results={results} keyword={keyword} isLoading={isLoading} pagecount={pagecount} />
                ) : (
                    <p>Please try another search.</p>
                )}
                {isLoading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="secondary" />
                    </div>    
                ) : showMoreButton && totalcount > 0 && (
                    <Button variant="outline-secondary" size="lg" onClick={onShowMore} className="w-100 my-3">Show more</Button>
                )}
            </>
        )
    )
}

export default EventsResults