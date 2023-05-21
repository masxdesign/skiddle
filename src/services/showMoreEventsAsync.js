import { findLastIndex } from "lodash"
import { fetchSkiddleEventsAsync } from "./skiddle"
import dayjs from "dayjs"
import prettyDate from "utils/prettyDate"

const fixUniqId = (item, previousData) => {
    const index = findLastIndex(previousData.results, ({ id }) => item.id === id)
    return index > -1 ? `${item.id}_${index}`: item.id
}

const transformResponse = (item, previousData) => {

    return {
        ...item,
        _id: fixUniqId(item, previousData),
        startdate: prettyDate(item.startdate)
    }
}

const showMoreEventsAsync = async (keyword, offset, previousData) => {

    const newData = await fetchSkiddleEventsAsync(keyword, { offset })

    // A potential bug with the skiddle events endpoint
    // Some events appears more than once
    // which causes react to throw a duplicate key error
    // when displaying results in a list
    const newResults = newData.results
        .map((item) => transformResponse(item, previousData))

    return { 
        ...newData,  
        results: [ 
            ...previousData.results, 
            ...newResults 
        ]
    }

}

export default showMoreEventsAsync