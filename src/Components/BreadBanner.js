import React, { Component } from 'react'
import bannerImg from "../undraw_growth_analytics_8btt.svg"
export default class BreadBanner extends Component {
  render() {
    return (
      
      <div className="bread-wrapper">
        <div className="container bread-inner">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-10 mt-auto mb-auto">
                    <ul className="nav">
                        <li className="nav-item">
                        <a className="nav-link active" href="#">All</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Business</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Productivity</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-lg-4 col-sm-2 ml-auto show-lg">
                    <input type="text" className="form-control" id="searchbox" placeholder="Search" />
                    <button className="btn btn-default btn-sm"></button>
                </div>
            </div>
        </div>
      </div>
        
    )
  }
}
