import React, { Component } from "react";

export default class MovieElement extends Component {
  render() {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img
            src="https://static.wikia.nocookie.net/familyguyfanon/images/e/e9/Gladiator.jpg/revision/latest?cb=20190720082049"
            alt="gladiator"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Gladiator</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              ducimus, maxime et voluptatem sequi aliquam sit quae qui quaerat
              ab modi officiis deserunt rem, asperiores porro culpa minima,
              eveniet dolorem!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
