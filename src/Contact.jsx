import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact(){
    const [sent, setSent] = useState('')

    // EmailJS
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_g2azayh", "template_y4plrk5", form.current, {
          publicKey: "LZzQNv71z-sbPqFT1",
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSent('MESSAGE SENT!')
            setTimeout(()=>{
                setSent('')
            }, 5000)
          },
          (error) => {
            console.log('FAILED...', error.text);
            setSent('Error: MESSAGE NOT SENT!')
          },
        );
    };

    return(
        <>
            <div className="grid gap-6 mx-40">
            <div className="sticky top-0 flex justify-between items-center mt-4">
                    <Link className="text-pdarkteal font-space font-extrabold text-3xl" to="/">|NEIL.ONG|</Link>
                    <div className="flex gap-2 text-pgray">
                        <Link className="hover:underline hover:text-pteal" to="/">Home</Link>
                        <Link className="hover:underline hover:text-pteal" to="/projects">Projects</Link>
                        <Link className="hover:underline hover:text-pteal" to="/about">About</Link>
                        <Link className="hover:underline hover:text-pteal" to="/contact">Contact</Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-10">
                    <div className="text-pgray grid grid-rows-2 gap-3">
                        <h1 className="text-7xl font-extrabold">You can reach me directly:</h1>
                        <div>
                            <h2 className="text-2xl font-extrabold">Email</h2>
                            <p>email@email.com</p>
                        </div>

                    
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="grid grid-rows-4 gap-4 text-pgray">
                        <input className="bg-pdarkgray" name="user_name" type="text" placeholder="Name" required/>
                        <input className="bg-pdarkgray" name="user_email" type="email" placeholder="Email" required/>
                        <textarea className="bg-pdarkgray" name="message" id="" placeholder="Message" required></textarea>
                        <button type="submit" className="bg-pdarkgray border border-black rounded-full transition ease-in-out duration-300 hover:bg-pteal hover:text-black">Send Message</button>
                        <div className="text-pgray">{sent}</div>
                    </form>                   
                </div>

            </div>
            <div className="fixed bottom-0 w-full flex align-center justify-center gap-2 bg-pdarkgray text-pgray">
                <div>MADE BY NEIL ONG</div>
                <a href=""><img className="h-5 w-5" src="./src/assets/github.svg" alt="Github"/></a>
            </div>
        </>
    )
}

export default Contact