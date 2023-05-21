import { fetchSkiddleArtistDetailsAsync } from "./skiddle"
import prettyRangeDate from "utils/prettyRangeDate"
import getDecodedString from "utils/getDecodedString"

const fetchArtistDetailsAsync = async (artistId) => {
    const details = await fetchSkiddleArtistDetailsAsync(artistId)

    return {
        ...details,
        results: {
            ...details.results,
            description: getDecodedString(details.results.description),
            rangeDate: prettyRangeDate(details.results.startdate, details.results.enddate),
            spotifyPopularity: Number(details.results.spotifyPopularity.replace(/%/, ""))
        }
    }
}

export default fetchArtistDetailsAsync