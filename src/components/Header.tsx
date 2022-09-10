import React from 'react';

const Header = () => {

    const skills = [
        {
            id: 1,
            skill: 'PHP',
            years: 3
        }
    ]

    return(
        <header className="header">
            <main className="header__user">
                <img src="/assets/img/userpic.svg" className="header__user--picture" alt="User picture"/>
                <div className="header__user--info">
                    <h1 className="name">John Smith</h1>
                    <h4 className="from">Portland, Oregon, USA</h4>
                    <h4 className="language"><span className="flag"/> English</h4>
                    <section className="skills">
                        {
                            skills.map(el => <div className="skill" key={el.id}>{el.skill}</div>)
                        }
                        <button className="skills-btn">+</button>
                    </section>
                </div>
            </main>
            <div className="header__link">
                <span className="printer"></span>
                <a href="#">Print this page</a>
            </div>
        </header>
    )
}

export default Header;
