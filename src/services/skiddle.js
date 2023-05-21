import axios from "axios";

const skiddleV1Api = axios.create({
    baseURL: "https://www.skiddle.com/api/v1"
})

const api_key = import.meta.env.VITE_SKIDDLE_API_KEY

export const fetchSkiddleEventsAsync = async (keyword, params) => {
    const defaultParams = {
        api_key,
        keyword,
        order: "trending",
        limit: 20,
        offset: 0
    }
    
    const params_ = { 
        ...defaultParams, 
        ...params 
    }

    const { data } = await skiddleV1Api.get("/events/search", { params: params_ })

    const totalcount = Number(data.totalcount)

    return {
        ...data,
        totalcount,
        showMore: (params.offset + data.pagecount) < totalcount 
    }
}

export const fetchSkiddleEventDetailsAsync = async (eventId) => {

    const { data } = await skiddleV1Api.get(`/events/${eventId}`, { params: { api_key } })

    return data

}