import React from "react";
import Travel from "./components/Travel";
import Navbar from "./components/Navbar";
import {travelD} from "./components/travelD"

export default function App(){
    const dataT = travelD.map(item =>
        {
            return(  
                <Travel
                title={item.title}
                location= {item.location}
                googleMapsUrl={ item.googleMapsUrl}
                startDate={item.startDate}
                endDate= {item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
                />
            )
        })

        return (
            <div>
                <Navbar />
                {dataT}
            </div>)
}