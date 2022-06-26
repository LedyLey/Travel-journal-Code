import React from "react"
import location from "../images/location.png"


export default function Travel(prop) {
    return (
        <section>

            <img src={prop.imageUrl} alt={prop.location}></img>
            <div className="properties">
                <div className="location">
                    <div className="locationandpic">
                        <img src={location} alt="location" />
                        <h2>{prop.location}</h2>
                    </div>
                    <a href={prop.googleMapsUrl}><h3>view on Google Maps</h3></a>

                </div>
                <h1>{prop.title}</h1>
                <p className="dates">{prop.startDate} - {prop.endDate}</p>
                <p>{prop.description}</p>

            </div>

        </section>
    )
}