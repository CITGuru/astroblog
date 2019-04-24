import React, { Component } from "react";
import Sidebar from "./Sidebar";
import bannerImg from "../undraw_growth_analytics_8btt.svg";

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12">
            <h4>Articles</h4>
            <div className="articles-wrapper">
              <div className="card">
                <img className="card-img-top" src={bannerImg} alt="card" />
                <div className="card-body">
                  <h4 className="card-title">Sample Card Title</h4>
                  <p className="card-text">
                    He seems sinking under the evidence could not only grieve
                    and a visit. The father is to bless and placed in his length
                    hid...
                  </p>
                  <a href="#" className="btn btn-primary">
                    Tell me more &rarr;
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="card col-md-4 mt-2 mb-2 ml-2">
                  <img className="card-img-top" src={bannerImg} alt="card" />
                  <div className="card-body">
                    <h4 className="card-title">Sample Card Title</h4>
                    <p className="card-text">
                      He seems sinking under the evidence could not only grieve
                      and a visit. The father is to bless and placed in his
                      length hid...
                    </p>
                    <a href="#" className="btn btn-primary">
                      Tell me more &rarr;
                    </a>
                  </div>
                </div>
                <div className="card col-md-4 mt-2 mb-2 ml-2">
                  <img className="card-img-top" src={bannerImg} alt="card" />
                  <div className="card-body">
                    <h4 className="card-title">Sample Card Title</h4>
                    <p className="card-text">
                      He seems sinking under the evidence could not only grieve
                      and a visit. The father is to bless and placed in his
                      length hid...
                    </p>
                    <a href="#" className="btn btn-primary">
                      Tell me more &rarr;
                    </a>
                  </div>
                </div>
                <div className="card col-md-4 mt-2 mb-2 ml-2">
                  <img className="card-img-top" src={bannerImg} alt="card" />
                  <div className="card-body">
                    <h4 className="card-title">Sample Card Title</h4>
                    <p className="card-text">
                      He seems sinking under the evidence could not only grieve
                      and a visit. The father is to bless and placed in his
                      length hid...
                    </p>
                    <a href="#" className="btn btn-primary">
                      Tell me more &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
