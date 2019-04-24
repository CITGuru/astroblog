import React, { Component } from 'react'
import bannerImg from "../undraw_growth_analytics_8btt.svg"
export default class BreadBanner extends Component {
  render() {
    return (
      
      <div className="bread-wrapper">
        <div className="container bread-inner">
            <div className="row">
                <div className="col-8 mt-auto mb-auto">
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
                <div className="col-4 ml-auto">
                    <input type="text" className="form-control" id="searchbox" placeholder="Search" />
                </div>
            </div>
        </div>
      </div>
        
    )
  }
}
