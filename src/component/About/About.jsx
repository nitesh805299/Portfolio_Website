import React from 'react'
import './About.css'
import Nitesh from '../../assets/nitesh.png';
import theme_pattern from'../../assets/theme_pattern.svg';
const About = () => {
  return (
    <div className='about'>
       <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern}alt="" />
       </div>

      <div className='about-section'>
              <div className='about-left'>
               <img src={Nitesh} alt="" />
              </div>

           < div className="about-right">
                <div className="about-para">
                      <p>I am a frontend developer focused on building responsive, clean, and user-friendly websites.</p>
                     <p>My passion for web design and development helps me create polished interfaces with HTML, CSS, JavaScript, and React.</p>
               </div>
                 <div className="about-skills">
                     <div className="about-skill">
                        <p>HTML & CSS</p>
                        <div className="skill-track"><span style={{width:"85%"}}></span></div>
                        <strong>85%</strong>
                     </div> 
                     <div className="about-skill">
                        <p>React JS</p>
                        <div className="skill-track"><span style={{width:"70%"}}></span></div>
                        <strong>70%</strong>
                     </div> 
                     <div className="about-skill">
                        <p>Java Script</p>
                        <div className="skill-track"><span style={{width:"75%"}}></span></div>
                        <strong>75%</strong>
                     </div>
                     <div className="about-skill">
                        <p>Next JS</p>
                        <div className="skill-track"><span style={{width:"50%"}}></span></div>
                        <strong>50%</strong>
                     </div>
                     
                 </div>
            </div>
      </div>
           


          <div className="about-achievements">
             <div className="about-achievement">
                <h1>2+</h1>
                <p>YEAR OF EXPERIENCE</p>
             </div>
          
             <hr />
             <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>

             </div>
             <hr />
             <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>

             </div>

          </div>

        </div>

      
  )
}

export default About
