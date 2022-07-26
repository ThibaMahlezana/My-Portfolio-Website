import React from 'react';
import '../styles/global.css';
import '../styles/about.css';
import aboutImg from '../images/Pic2.jpg';
import { BackendSkills, ExtraSkills, FrontendSkills } from '../data/Skills';
import Skill from '../components/Skill';

export default function About() {
  return (
    <div id="about" className='about'>
      <div className='container'>
        <div className="title">
            <h1>About</h1>
            <p>All about me</p>
        </div>
        <div className='row'>
          <div className="col-sm-12 col-md-5 col-lg-5">
            <div className='a-img'><img alt='Thiba Mahlezana' src={aboutImg} /></div>
          </div>
          <div className='col-sm-12 col-md-7 col-lg-7 a-desc'>
            <h3>Full-Stack software Developer</h3>
            <p>
            I am Full-Stack mostly self-taught software developer with knowledge in multiply 
            settings. I can design and develop programs using the latest and most appropriate technologies. 
            Experienced working on tech startups enviroment. I enjoy working in an enviroment where 
            active learning and developing working solutions is mostly a priority.
            </p>
          </div>
        </div>
        <div className="row a-skills">
          <div className="title">
              <h1>Skills</h1>
              <p>The Skills I have</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <h4 className="a-skills-title">Frontend Development</h4>
            { FrontendSkills.map((skill) => {
              return(
                <Skill 
                  icon={skill.icon}
                  title={skill.title}
                  level={skill.level}
                />
              );
            })}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <h4 className="a-skills-title">Backend Development</h4>
            { BackendSkills.map((skill) => {
              return(
                <Skill 
                  icon={skill.icon}
                  title={skill.title}
                  level={skill.level}
                />
              );
            })}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <h4 className="a-skills-title">Deep learning</h4>
            { ExtraSkills.map((skill) => {
              return(
                <Skill 
                  icon={skill.icon}
                  title={skill.title}
                  level={skill.level}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
