import {useRef,useState} from 'react'
import './Contactme.css'
import {BsLinkedin,BsGithub,BsTwitter,BsInstagram,BsYoutube} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contactme = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ow4042l', 'template_xt1tnmp', form.current, 'U6QpvTKd4sWsVY4PY')
      .then((result) => {
          console.log(result.text);
          console.log('Email sent successfully');
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='main_container_contact'>
      
      <div className='main_container_contact_inner'>
        <div className='large_text_contact'>Contact Me</div>
          <div className='contactme_container'>
            <div className='contactme_heading'>
              &nbsp;&nbsp;Contact Me :  
            </div>
            <div className='contactme_contents'>
              <ul className='list_contactMe'>
                <li><BsLinkedin/><a href='https://www.linkedin.com/in/ayushman-sinha-1606/' target='_blank'> LinkedIn</a></li>
                <li><BsGithub/><a href='https://github.com/ayushman-sinha' target='_blank'> GitHub</a></li>
                {/* <li><BsTwitter/><a href='https://twitter.com/Ayushman_Sinha_' target='_blank'> Twitter</a></li> */}
                <li><BsInstagram/><a href='https://www.instagram.com/ayushmaan.sinha/' target='_blank'> Instagram</a></li>
                <li><BsYoutube/><a href='https://www.youtube.com/channel/UC9GVr_5rs_G5wfp_D5IohiQ' target='_blank'> YouTube</a></li>
              </ul>
            </div>
            <div className='contactme_heading'>
              &nbsp;&nbsp;Leave a Feedback :  
            </div>
            <div className='form_container'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='form_group'>
                  <div className='form_content'>
                    <label htmlFor='name'>Name </label>
                    <input type='text' name='user_name' id='name' className='input_box' placeholder='Enter your name' />
                  </div>
                  <div className='form_content'>
                    <label htmlFor='name'>Phone </label>
                    <input type='text' name='user_phone' id='phone' className='input_box' placeholder='Enter your phone' />
                  </div>
                  <div className='form_content'>
                    <label htmlFor='name'>Email </label>
                    <input type='text' name='user_email' id='email' className='input_box' placeholder='Enter your email' />
                  </div>
                  <div className='form_content'>
                    <label htmlFor='name'>Message</label>
                    <textarea name='message' id='message' placeholder='Enter your message' className='input_box textarea_edit' />
                  </div>
                  <div className='form_content sub_edit'>
                    <button type='submit' className='submit_button'>Submit</button>
                  </div>

                </div>
              </form>

            </div>
          </div>
      </div>
    </div>
  )
}

export default Contactme