import { Button } from "react-bootstrap"
import Grid from "../../views/Grid"
import Loading from "@/Loading/Loading"

const views = {
    Grid
}

const Listing = ({ viewComponent: ViewComponentProp, keyword, totalcount, pagecount, results, isFullLoading, isLoading, showMoreButton, onShowMore }) => (
    isFullLoading && isLoading ? (
        <ViewComponentProp pagecount={pagecount} isLoading />
    ) : (
        <>
            {totalcount > 0 ? (
                <ViewComponentProp results={results} keyword={keyword} isLoading={isLoading} pagecount={pagecount} />
            ) : (
                <p>Please try another search.</p>
            )}
            {isLoading ? (
                <Loading />   
            ) : showMoreButton && totalcount > 0 && (
                <Button variant="outline-secondary" size="lg" onClick={onShowMore} className="w-100 my-3">Show more</Button>
            )}
        </>
    )
)

export default Listing