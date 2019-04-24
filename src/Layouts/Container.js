import React, { Component } from "react";
import Sidebar from "./Sidebar";
import bannerImg from "../undraw_growth_analytics_8btt.svg";
import ArticlesList from "../Components/ArticlesList";

export default class Container extends Component {
  render() {
    return (
      <div className="main-wrapper container my-5 unpad">
        <div className="row">
          <div className="col-lg-8 col-md-4 col-sm-12 unpad">
            <ArticlesList />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 unpad">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
