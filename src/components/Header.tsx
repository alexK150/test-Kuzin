import React from 'react';

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
                    <span className="printer"/>
                    <div className="print-text">Print this page</div>
                </div>
            </div>
        </header>
    )
}

export default Header;
