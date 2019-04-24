import React, { Component } from "react";
export default class ArticleCard extends Component {
  render() {
    const article = this.props.article;
    let className = "article card ";
    if (this.props.className) className += this.props.className;
    return (
      <div className={className}>
        <img className="card-img-top" src={article.image} alt="card" />
        <div className="card-body">
          <div className="card-top-body my-3">
            <span className="category">Business Tips</span>
            <span className="ctspce" />
            <span className="date">26-03-2019</span>
          </div>
          <h4 className="card-title">{article.title}</h4>
          <p className="card-text summary">{article.summary}</p>
          <a href="#" className="label label-primary read-more">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
