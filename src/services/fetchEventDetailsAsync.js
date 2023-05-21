import prettyDate from "utils/prettyDate"
import { fetchSkiddleEventDetailsAsync } from "./skiddle"
import prettyRangeDate from "utils/prettyRangeDate"
import getDecodedString from "utils/getDecodedString"
import { isEmpty } from "lodash"

const fetchEventDetailsAsync = async (eventId) => {
    const details = await fetchSkiddleEventDetailsAsync(eventId)

    const entryprice = details.results.entryprice.replace(/\D/g,'')

    return {
        ...details,
        results: {
            ...details.results,
            entryprice: isEmpty(entryprice) ? "n/a": `£${entryprice}`,
            description: getDecodedString(details.results.description),
            startdate: prettyDate(details.results.startdate),
            rangeDate: prettyRangeDate(details.results.startdate, details.results.enddate)
        }
    }
}

export default fetchEventDetailsAsync