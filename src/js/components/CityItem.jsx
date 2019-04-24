import React from "react";

export class CityItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="city__list">
        <p className="city__list-name">
          {this.props.number + 1}.{this.props.city}
        </p>
        <p className="city__list-description">{this.props.description}</p>
      </div>
    );
  }
}
