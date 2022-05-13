import React, { Component } from "react";
import "../customcss/style.css";




class Footer extends Component {
  render() {
    return (
     <>

  <br className="box-holder" />

<footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright" align="center">
            &copy; 2022  
            | <a href="/copyright"><strong>Copyright </strong></a> 
            | <a href="/term-condition.html"><strong> Terms & Conditions</strong></a>
        </div>
       
      </div>
    </div>
    </div>
  </footer>

      </>
      );
  }
}
 
export default Footer;