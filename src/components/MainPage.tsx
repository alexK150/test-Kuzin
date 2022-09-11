import React from 'react';
import ExpirienceInfo from "./ExpirienceInfo";
import LocationMap from "./LocationAndAvailability";
import Availability from "./Availability";
import Quotes from "./Quotes";
import SimpleCodeEditor from "./SimpleCodeEditor";

const MainPage = () => {
    return (
        <main className="main">
            <div className="main__exp-and-quotes">
                <ExpirienceInfo/>
                <Quotes/>
            </div>
            <div className="main__code-editor-and-availability">
                <SimpleCodeEditor/>
                <Availability/>
            </div>
            <div className="code-map-env">
                <LocationMap/>
            </div>
        </main>
    );
};

export default MainPage;
