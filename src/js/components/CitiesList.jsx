import React from "react";
import { CityItem } from "./CityItem.jsx";

export class CitiesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderedList = this.props.cities.map((element, id) => {
      return (
        <CityItem
          city={element.city}
          description={element.description}
          key={id}
          number={id}
        />
      );
    });

    return <div>{renderedList}</div>;
  }
}
