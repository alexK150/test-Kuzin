import React from 'react';

const Availability = () => {
    return (
        <section className="availability-and-preferences">
            <div className="availability">
                <h3 className="availability__title">Availability</h3>
                <div className="availability__text">Full-time</div>
            </div>
            <div className="preferences">
                <h3 className="preferences__title">Preferred Environment</h3>
                <div className="preferences__text">GitHub, Mac OSX</div>
            </div>
        </section>
    );
};

export default Availability;
