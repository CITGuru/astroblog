import React, { Component } from 'react'
import bannerImg from "../undraw_growth_analytics_8btt.svg"
export default class Banner extends Component {
  render() {
    return (
      
      <div className="welcome d-flex justify-content-center flex-column">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark pt-4 px-0">
            
            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              

              <ul className="navbar-nav ml-auto">
    <button className="btn btn-primary">Learn more</button>
                
                
                
              </ul>
            </div>
          </nav>
        </div>
        <div className="inner-wrapper mt-auto mb-auto container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 mt-auto mb-auto mr-3">
                <h1 className="welcome-heading display-5 font-weight-bold text-white">Grow your business, let us handle the rest</h1>
                <p className="text-white">With Astro, businesses can maximize profit by making them stay organized, stay compliant to regulations while they focus on doing the things that grows their business.</p>
                <a href="#our-services" className="btn btn-lg btn-outline-white btn-pill align-self-center">Learn More</a>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 ml-auto">
              <img className="banner-img" src={bannerImg} alt="Astro Analysis" />
            </div>
          </div>
        </div>
      </div>
        
    )
  }
}
