import { useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const useSearchSubmit = ({ pathname = "/events/search", onChange } = {}) => {

    const location = useLocation()
    const navigation = useNavigate()

    const currQuery = useMemo(() => new URLSearchParams(location.search), [location])

    const applyQuery = (query) => {
        navigation({ pathname, search: `${query}` })
    }

    const onSearch = (values) => {
        const query = new URLSearchParams({ keyword: values.search })
        applyQuery(query)
        onChange && onChange()
    }

    const keyword = useMemo(() => currQuery.get("keyword") ?? location.state?.keyword ?? "", [currQuery])

    return {
        onSearch,
        keyword
    }

}

export default useSearchSubmit