import React from 'react';

const Section = () => (    
    <div className="container-fluid p-0">
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">
        <h1 className="mb-0">Vandish
        <span className="text-primary">Gandhi</span>
        </h1>
        <div className="subheading mb-5">
        <a href="mailto:name@email.com">vandish.gandhi@hotmail.com</a>
        </div>
        <p className="mb-5">I am a frontend developer who is strongly focused on React, AngularJS and Ember, having commercial experience of 4 years. I am ICAgile certified for agile fundamental practices and a team player ranging from my primary specialisation on the front-end to API engineering and infrastructure setup for cross platform apps. I am interested in working for business and analytical web application solutions.</p>
        <ul className="list-inline list-social-icons mb-0">
        <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/vandish/" rel="noopener noreferrer" target="_blank">
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
            </a>
        </li>
        <li className="list-inline-item">
            <a href="https://github.com/veegandhi" rel="noopener noreferrer" target="_blank">
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
            </span>
            </a>
        </li>
        </ul>
    </div>
    </section>
</div>
);

export default Section;