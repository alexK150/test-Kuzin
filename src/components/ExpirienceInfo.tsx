import React from 'react';

const ExpirienceInfo = () => {
    return (
        <section className="portfolio-experience">
            <div className="portfolio">
                <h3 className="portfolio__title">Portfolio</h3>
                <ul className="portfolio__technologies-list">
                    <li className="list-element">Bootstrap 4 Material Design (Sample Link)</li>
                    <li className="list-element">Modern JavaScript stack</li>
                    <li className="list-element">Datepicker for twitter bootstrap</li>
                    <li className="list-element">Fast and reliable Bootstrap widgets in Angular</li>
                </ul>
            </div>
            <div className="experience">
                <h3 className="experience__title">Experience</h3>
                <ul className="experience__skills-list">
                    <li className="list-element skill">PHP <span className="skill-year">6 years</span></li>
                    <li className="list-element skill">JavaScript <span className="skill-year">2 years</span></li>
                    <li className="list-element skill">HTML <span className="skill-year">3 years</span></li>
                </ul>
            </div>
        </section>
    );
};

export default ExpirienceInfo;
