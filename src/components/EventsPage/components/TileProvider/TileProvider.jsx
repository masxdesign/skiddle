import React, { useContext } from "react"

const TileContext = React.createContext()

export const useTileContext = () => useContext(TileContext)

const TileProvider = ({ component: TileComponent, data }) => (
    <TileContext.Provider value={data}>
        <TileComponent />
    </TileContext.Provider>
)

export default TileProvider