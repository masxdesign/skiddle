import prettyDate from "utils/prettyDate"
import { fetchSkiddleEventDetailsAsync } from "./skiddle"
import prettyRangeDate from "utils/prettyRangeDate"
import getDecodedString from "utils/getDecodedString"

const fetchEventDetailsAsync = async (eventId) => {
    const details = await fetchSkiddleEventDetailsAsync(eventId)

    return {
        ...details,
        results: {
            ...details.results,
            description: getDecodedString(details.results.description),
            startdate: prettyDate(details.results.startdate),
            rangeDate: prettyRangeDate(details.results.startdate, details.results.enddate)
        }
    }
}

export default fetchEventDetailsAsync