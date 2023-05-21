import dayjs from "dayjs"
import isToday from "dayjs/plugin/isToday"
import isYesterday from "dayjs/plugin/isYesterday"

dayjs.extend(isToday)
dayjs.extend(isYesterday)

const prettyRangeDate = (startDate, endDate) => {

    const djs = dayjs(startDate)
    const dates = djs.format("dddd, MMMM D, YYYY")
    const dje = dayjs(endDate)
    const datee = dje.format("dddd, MMMM D, YYYY")

    if(dates === datee) return dates

    return `${dates} - ${datee}` 

}

export default prettyRangeDate