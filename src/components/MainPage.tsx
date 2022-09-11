import React from 'react';
import ExpirienceInfo from "./ExpirienceInfo";
import LocationMap from "./LocationAndAvailability";
import Availability from "./Availability";
import Quotes from "./Quotes";
import SimpleCodeEditor from "./SimpleCodeEditor";

const MainPage = () => {
    return (
        <main className="main">
            <div>
                <div className="main__exp-and-quotes">
                    <ExpirienceInfo/>
                    <Quotes/>
                </div>
                <div className="main__location-and-availability">
                    <LocationMap/>
                    <Availability/>
                </div>
            </div>
            <div className="code-map-env">
                <SimpleCodeEditor/>
            </div>
        </main>
    );
};

export default MainPage;
