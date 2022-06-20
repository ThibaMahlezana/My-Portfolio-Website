import React from 'react';
import '../styles/global.css';
import '../styles/about.css';
import aboutImg from '../images/Pic2.jpg';
import { BackendSkills, ExtraSkills, FrontendSkills } from '../data/Skills';
import Skill from '../components/Skill';

export default function About() {
  return (
    <div className='about'>
      <div className='container'>
        <div className="title">
            <h1>About</h1>
            <p>All about me</p>
        </div>
        <div className='row'>
          <div className="col-5">
            <div className='a-img'><img alt='Thiba Mahlezana' src={aboutImg} /></div>
          </div>
          <div className='col-7 a-desc'>
            <h3>Full-Stack software Developer</h3>
            <p>I am a self-taught software developer. I m passionate about technology and startups.
              Full-Stack Developer. Intrigued with Artificial Intelligence systems. 
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
              Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
              Quia fugiat sit in iste officiis commodi quidem hic quas
            </p>
          </div>
        </div>
        <div className="row a-skills">
          <div className="title">
              <h1>Skills</h1>
              <p>The Skills I have</p>
          </div>
          <div className="col-4">
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
          <div className="col-4">
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
          <div className="col-4">
            <h4 className="a-skills-title">Extra</h4>
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
