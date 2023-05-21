import dayjs from "dayjs"
import isToday from "dayjs/plugin/isToday"
import isYesterday from "dayjs/plugin/isYesterday"
import nth from "./nth"

dayjs.extend(isToday)
dayjs.extend(isYesterday)

const prettyDate = (date) => {

    const dj = dayjs(date)

    const day = dj.format("ddd")
    const dayOfMon = dj.get("D")
    const month = dj.format("MMM")

    if(dj.isToday()) return "Today"
    if(dj.isYesterday()) return "Yesterday"

    return `${day} ${dayOfMon}${nth(dayOfMon)} ${month}` 

}

export default prettyDate