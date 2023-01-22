import React from 'react'
import './AboutMe.css'
import selfPicture from '../Images/self.png'
import Typewriter from 'typewriter-effect';
import Blob from '../Images/Blob.svg'




const AboutMe = () => {
        
  return (
    <div className='main_container_aboutme'>
       
        <div className='section_one_about_me'>
            <div className='about_me_heading'>
                I am &nbsp;
                <Typewriter
                    options={{
                        strings: ['Ayushman Sinha', 'a Web Developer', 'a Competitive Coder'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className='about_me_text'>
                I am pursuing my B. Tech from Siddaganga Institute of Tecnology, Tumakuru.  I am a full stack developer and a competitive coder.
                 My passion for coding started at a really young age.  I love to sing in my freetime.
            </div>
            <button type='button' className='rectangle1' >
                My Resume
            </button>
        </div>
        
        <div className='section_two_about_me'>
            <img src={selfPicture} alt='myPicture' className='self_picture'/>
            <img src={Blob} alt='blob' className='blob'/>
        </div>
       
    </div>
  )
}

export default AboutMe