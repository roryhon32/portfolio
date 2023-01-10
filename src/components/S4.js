import emailjs from "emailjs-com";
import React from 'react';
import { Container } from "react-bootstrap";

export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_qej03km', 'template_n9ozv8f', e.target, 'QPgjAuJe6FOJKPfeA')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
    return(
        <div className="contact">
            <div className="conteiner">
            <h2>Contato</h2><Container>
                
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-lg-8 col-sm-12 form-group mx-auto">
                            <label>Name</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Name" name="name"/>
                        </div>
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="your e-mail" name="email"/>
                        </div>

                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>message</label>
                            <textarea className="form-control" id="" cols="30" rows="8" required placeholder="your message" name="message"></textarea>
                        </div>
                        <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Contact me"></input>
                        </div>
                    </div>
                </form>
            </Container>
            </div>
        </div>
    )
}