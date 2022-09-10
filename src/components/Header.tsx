import React from 'react';
import cn from 'classnames';

const Header = () => {

    const skills = [
        {
            id: 1,
            skill: 'PHP',
            years: 3
        },
        {
            id: 2,
            skill: 'JavaScript',
            years: 3
        }
    ]

    return(
        <header className="header">
            <div className="header__container">
                <main className="header__user">
                    <img src="/assets/img/userpic.svg" className="header__user--picture" alt="User picture"/>
                    <div className="header__user--info">
                        <h1 className="name">John Smith</h1>
                        <h4 className="from">Portland, Oregon, USA</h4>
                        <h4 className="language"><span className="flag"/><span className="eng">English</span></h4>
                        <section className="skills">
                            {
                                skills.map(el => <div className="skill" key={el.id}>{el.skill}</div>)
                            }
                            <button className="skills-btn">
                                <img src="/assets/icons/ic-add.svg" alt="add button"/>
                            </button>
                        </section>
                    </div>
                </main>
                <div className="header__print">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 20H8V19H14V20ZM24 5V18H20V24H4V18H0V5H4V0H20V5H24ZM18 15H6V22H18V15ZM18 2H6V5H18V2ZM22 7.5C22 7.224 21.776 7 21.5 7C21.224 7 21 7.224 21 7.5C21 7.776 21.224 8 21.5 8C21.776 8 22 7.776 22 7.5ZM16 17H8V18H16V17Z"/>
                    </svg>
                    <div className="print-text">Print this page</div>
                </div>
            </div>
        </header>
    )
}

export default Header;
