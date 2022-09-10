import React from 'react';
import ExpirienceInfo from "./ExpirienceInfo";
import LocationMap from "./LocationAndAvailability";
import Availability from "./Availability";
import Quotes from "./Quotes";

const MainPage = () => {
    return (
        <main className="main">
            <div className="main__exp-and-quotes">
                <ExpirienceInfo/>
                <Quotes/>
            </div>
            <div className="main__location-and-availability">
                <LocationMap/>
                <Availability/>
            </div>
        </main>
    );
};

export default MainPage;
