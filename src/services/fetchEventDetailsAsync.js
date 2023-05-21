import prettyDate from "utils/prettyDate"
import { fetchSkiddleEventDetailsAsync } from "./skiddle"
import prettyRangeDate from "utils/prettyRangeDate"

const fetchEventDetailsAsync = async (eventId) => {
    const details = await fetchSkiddleEventDetailsAsync(eventId)

    return {
        ...details,
        results: {
            ...details.results,
            startdate: prettyDate(details.results.startdate),
            rangeDate: prettyRangeDate(details.results.startdate, details.results.enddate)
        }
    }
}

export default fetchEventDetailsAsync