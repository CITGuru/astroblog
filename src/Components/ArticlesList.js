import React, { Component } from "react";
import bannerImg from "../undraw_growth_analytics_8btt.svg";
import bannerImg1 from "../undraw_adventure_4hum.png";

import ArticleCard from "./ArticleCard";
export default class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "How to encourage better office communication and efficiency",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: bannerImg
      },
      articles: [
        {
          title: "New article today",
          summary: "This is a demo summary",
          image: bannerImg
        },
        {
          title: "New secnoe artilce",
          summary: "This is a new demo summary",
          image: bannerImg1
        }
      ]
    };
  }
  render() {
    return (
      <div className="articles-wrapper">
        <ArticleCard article={this.state.article} className="mb-4 first" />
        <div className="small row">
          <div className="card col-md-5 my-3 mr-4">
            <img className="card-img-top" src={bannerImg} alt="card" />
            <div className="card-body">
              <h4 className="card-title">Sample Card Title</h4>
              <p className="card-text">
                He seems sinking under the evidence could not only grieve and a
                visit. The father is to bless and placed in his length hid...
              </p>
              <a href="#" className="btn btn-primary">
                Tell me more &rarr;
              </a>
            </div>
          </div>
          <div className="card col-md-5 my-3">
            <img className="card-img-top" src={bannerImg} alt="card" />
            <div className="card-body">
              <h4 className="card-title">Sample Card Title</h4>
              <p className="card-text">
                He seems sinking under the evidence could not only grieve and a
                visit. The father is to bless and placed in his length hid...
              </p>
              <a href="#" className="btn btn-primary">
                Tell me more &rarr;
              </a>
            </div>
          </div>
          <div className="card col-md-5 my-3 mr-4">
            <img className="card-img-top" src={bannerImg} alt="card" />
            <div className="card-body">
              <h4 className="card-title">Sample Card Title</h4>
              <p className="card-text">
                He seems sinking under the evidence could not only grieve and a
                visit. The father is to bless and placed in his length hid...
              </p>
              <a href="#" className="btn btn-primary">
                Tell me more &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
