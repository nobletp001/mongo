import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";
import "../customcss/style.css";
import ReactGA from 'react-ga'; 
import MessageSuccess from "../img/messageSuccess.gif";



 
class Thankyou extends Component {
  
        render() {

          
    return (
      <>

      
            <section>

              <div className="row">

              <div className="col">
              <div className="container">
                 <img  id="imgsuccess" src={MessageSuccess}   alt="Thank You For Your Massage"  /> 
               </div>
                </div>
       

           <div className="col">
           <div className="container">
                  <h1 id="messagesuccess">Thanks for droping a message, we will get back to you within 48 hours</h1>
                   <div className="container" style={{ marginTop: '10px', textAlign: 'center' }} >
                    <button className="btn btn-outline-primary"  ><NavLink exact to="/">Back to Home</NavLink></button>
                </div>
            </div>
              </div>
              </div>
              </section>

               
      </>
    );
  }
}

export default Thankyou;







