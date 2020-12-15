import React from 'react';
import ProjectCard from './ProjectCard';

const PortfolioWork = () => {
    return (
        <div>
            <div className="projectCards">
                <div className="ui link cards">
                    <ProjectCard img1="/fitness1.png" img2="/fitness2.png" title="Fitness Tracker" links="https://github.com/mandylloyd/Fitness-Tracker" description="This fitness tracker app allows users to store resistance or cardio exercises, view workout statistics by the week or by individual workout." tools="MongoDB/Heroku"/>
                    <ProjectCard img1="/yippee1.png" img2="/yippee2.png" title="YipPEE" links="https://github.com/mandylloyd/project-1" description="An interactive site that will allow the user to find a restaurant that they are interested in visiting and finding out the rating of their restroom facilities as it relates to ADA and gender-neutral standards of accessibility, as well as clenliness." tools="HTML/CSS/JS/Materialize"/>
                    <ProjectCard title="Team Generator" img1="/teamgen1.png" img2="/teamgen2.png" links="https://github.com/mandylloyd/TeamGenerator" description="This is a CLA that gets information from user through prompts and generators a HTML file of the team roster." tools="Node"/>
                    <ProjectCard title="Offline Budget Tracker" img1="/budget1.png" img2="/budget2.png" links="https://github.com/mandylloyd/budget-tracker" description="This is a basic budget tracker that allows user to track income and spending. It updates remaining balance when a new transaction is made. It is a fully functional PWA set up with a web manifest and service worker." tools=""/>
                    <ProjectCard title="Day Planner" img1="/dayplanner1.png" img2="/dayplanner2.png" links="https://github.com/mandylloyd/day-planner" description="A day planner that uses color coding for events that haven't happened yet or have already happened." tools="JS/CSS/Bootstrap"/>
                    <ProjectCard title="Employee Directory" img1="/empdir1.png" img2="/empdir2.png" links="https://github.com/mandylloyd/EmployeeDirectory" description="A React application that allows a user to sort through an employee database." tools="React/JS/CSS/Semantic"/>
                    <ProjectCard title="Employee Management System" img1="/empsys1.png" img2="/empsys2.png" links="https://github.com/mandylloyd/EmployeeManagementSystem" description="This application uses command line interface uses inquirer prompts to help the user view, add, or update. It utilizes an sql database." tools=""/>
                    <ProjectCard title="Note Taker" img1="/notetaker1.png" img2="/notetaker2.png" links="https://github.com/mandylloyd/NoteTaker" description="This is a note taking application to easily write and save important notes, and delete them to help the user stay organized." tools="Node/Express"/>
                    <ProjectCard title="Coding Quiz" img1="/quiz1.png" img2="/quiz2.png" links="https://github.com/mandylloyd/code-quiz" description="This quiz begins with 30 seconds when user clicks start and wrong answers reduce time left." tools="JS/HTML/CSS"/>
                    <ProjectCard title="ReadMe Generator" img1="/readmegen1.png" img2="/readmegen2.png" links="https://github.com/mandylloyd/ReadMeGenerator" description=" This application generates a README.md file through a series of command-line prompts that asks the user information about their project." tools=""/>
                    <ProjectCard title="Weather Dashboard" img1="/weatherdash1.png" img2="/weatherdash2.png" links="https://github.com/mandylloyd/weather-dashboard" description="This app uses Openweather API. User can search a zip code and read a 5 day forecast about humidity, wind speed, temperature, and the dates." tools="JS/HTML/CSS/Bootstrap"/>
                </div>
            </div>
        </div>
    )
};

export default PortfolioWork;
