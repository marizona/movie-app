import React, { Component } from "react";

export default class MovieDetails extends Component {
  render() {
    return (
      <div className="w-25 p-4 d-flex flex-column">
        <h5 className="">{this.props.movies.title}</h5>
        <hr className="w-100" />

        <div>
          <img
            className="d-block mx-auto"
            width="200"
            height="250"
            src={this.props.movies.img}
            alt=""
          />
        </div>
        <hr className="w-100" />
        <p className="text-secondary:">{this.props.movies.details}</p>
        <p>{this.props.movies.description}</p>
      </div>
    );
  }
}
