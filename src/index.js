import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


    function Hi() {
  return <div className = 'body'>
    
    <section className = 'section'>
   <div className='name'>
        <h1 className = 'first'><b>Muhammad Awais</b></h1>
        </div>
        
        <br/><br/>
        <div className = 'info'>
        <h2 className = 'perso'><b><u>Personal Information</u></b></h2>
        <ul>
            <li><b><u> Father Name </u>:</b><br/>Nazeer Ahmed</li>
            <li><b><u> D.O.B </u>:</b><br/> 12 sep 2003</li>
            <li><b><u> Address </u>:</b><br/> house no # R-139 Gulshan block-19 , Karachi.</li>
            <li><b><u> Contact </u>:</b><br/> 03172599245</li>
            <li><b><u> Email </u>:</b><br/> alizayn881@gmail.com</li>
        </ul>
    </div>
    </section>
    <aside>
        <h2 className = 'headings'>
            <u>Objective </u>:
        </h2>
        <p>Self-motivated team player seeking a position as a lead web developer with Next Generation Web Development
            where I can apply my advanced knowledge of web design with my leadership abilities to meet client needs and
            exceed their expectations.</p><hr/><hr/>

        <h2 className = 'headings'>
            <u>Education</u>:
        </h2>    
        <ul className='edu'>
            <li>Matric Science from Karachi secondary Board</li>
            <li>DAE from Sindh Technical Board of Education</li>
         
            
        </ul>
<hr/><hr/>
        <h2 className = 'headings'><u>
            Skills
        </u>:</h2>
        <ul className='edu'>
            <li>Web Developer</li>
            <li>Communicating Skills</li>
            <li> Problem Solving</li>
            <li>Creative</li>
            <li>Typing skills</li>
           
        </ul><hr/><hr/>
        <div className = 'links'>
        <h2 className = 'headings'><u>Experience</u> :</h2>
        <b><u><b>Projects</b></u> :</b>
        <a href="https://github.com/awais881" target="_blank" rel="noreferrer">GitHub </a>
    </div>
    </aside>
  
  </div>
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));