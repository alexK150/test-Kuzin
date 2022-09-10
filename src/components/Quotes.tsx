import React from 'react';

const Quotes = () => {
    return (
        <section className="quotes">
            <div className="quotes__quote">
                <img src="/assets/img/quotes-up.svg" className="quotes-up-first" alt="quote picture"/>
                <p className="text">The only true wisdom is in <br/> knowing you know nothing...</p>
                <img src="/assets/img/quotes-down.svg" className="quotes-down-first" alt="quote picture"/>
            </div>
            <div className="quotes__quote">
                <img src="/assets/img/quotes-up.svg" className="quotes-up-second" alt="quote picture"/>
                <p className="text">There is only one good,<br/> knowledge, and one evil,<br/> ignorance.</p>
                <img src="/assets/img/quotes-down.svg" className="quotes-down-second" alt="quote picture"/>
            </div>
        </section>
    );
};

export default Quotes;
