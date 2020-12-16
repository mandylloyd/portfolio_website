import React from 'react';
import './AboutMe.css';


const AboutMe = () => {
    return (
        <div>
            <div className="ui text container">
                <img alt="" className="ui large circular image center" src={require('../images/me.png')}/>

                <div className="ui list">
                    <div className="item">
                        <i className="users icon"></i>
                        <div className="content">
                            Mandy Lloyd
                        </div>
                    </div>
                    <div className="item">
                        <i className="marker icon"></i>
                        <div className="content">
                            Richmond, VA
                        </div>
                    </div>
                    <div className="item">
                        <i className="mail icon"></i>
                        <div className="content">
                            <p className="mailto:jack@semantic-ui.com">mandylloyd720@gmail.com</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="linkify icon"></i>
                        <div className="content">
                            <a href="https://github.com/mandylloyd">github.com/mandylloyd</a>
                        </div>
                    </div>
                    <div className="item">
                        <i className="file alternate icon"></i>
                        <div className="content">
                            <a href="https://docs.google.com/document/d/1uiA1kax33dyrYAOwmxb5Ia5osu_KsCT17iS2gX02hus/edit?usp=sharing">Resume</a>
                        </div>
                    </div>
                </div>

<div className="aboutme"> {'\t'} I studied Strategic Advertising at Virginia Commonwealth University. After graduating in 2017 with a Bachelors of Science in Mass Communication I have spent my time working in the service industry. I picked up an interest in User Experience along the way and am now pursuing knowledge of Web Development. I completed a Coding Bootcamp through The University of Richmond where I acquired a list of full stack skills. I'm looking to expand these skills and dive deeper into langauges like React and JavaScript to further my career as a Junior Softare Developer. 
</div>
            </div>
        </div>
    )
};

export default AboutMe;
