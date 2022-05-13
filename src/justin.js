import React, { Component } from "react";
import Justinsection from "./components/justinsection";
import {
  Link
} from "react-router-dom";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-175340939-1');


class Justin extends Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <>
        <div id="advanced-features" className="bg-dark text-secondary px-4 py-5 text-center ">
        <br />
        <br />
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Latest Igbo Songs</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">Be the first to download, listen or stream our just added Igbo music collection from trending Igbo artist from Eastern Nigeria. 
        You can also search for any Igbo artist on our website, or you can request for any igbo traditional music or Igbo Gospel that is not available on our website.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/contact" type="button" className="btn btn-outline-primary btn-lg px-4 me-sm-3 fw-bold" style={{ margin: '10px'}}>Request a song</Link>
          <Link to="#" type="button" className="btn btn-outline-light btn-lg px-4" style={{ margin: '10px'}}>A - Z Artist</Link>
        </div>
      </div>
    </div>
  </div>
          <Justinsection />
          <br />
            <br />
               <br />
      </>
    );
  }
}
 
export default Justin;