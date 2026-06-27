import React,{useRef} from 'react'
import './Contect.css'
import emailjs from "emailjs-com"


const Contact = () => {
    const form =useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            "service_seot228",
            "template_hj9hwak",
            form.current,
            "k6PgaPr1EsO3awF4z"
        ).then(
            (result)=>{
                console.log(result.text);
                alert("Message send successfully!");
            },
            (error)=>{
                console.log(error.text);
                alert("Failed to send message.");
            }
        );
    };
  return (
    <div className='contact'> 
       
            <h1>Contact</h1>
           
       
         
      <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required></input>
        <input type="email" name="user_email" placeholder="Email" required></input>
        <input type="text" name="contact_number" placeholder="Contact Number"required></input>
        <textarea name="message" placeholder="Type the message here" required></textarea>
        <button className='btn' type="submit">Send</button>
        </form>
    </div>
        </div>
  )
}

export default Contact