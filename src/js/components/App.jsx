import React from "react";
import { Header } from "./Header.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { CitiesList } from "./CitiesList.jsx";
import pollutedapi from "../apis/pollutedapi.jsx";
import citydescription from "../apis/citydescription.jsx";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      country: "brak"
    };
  }

  onTermSubmit = async term => {
    this.setState({ country: term });
    switch (term) {
      case "France":
        term = "FR";
        break;
      case "Germany":
        term = "DE";
        break;
      case "Poland":
        term = "PL";
        break;
      case "Spain":
        term = "ES";
        break;
    }
    console.log(term);
    const response = await pollutedapi.get("/measurements", {
      params: {
        country: term
      }
    });

    this.cityList(response.data.results);
  };
  cityList(array) {
    let renderedcity = [];
    for (let i = 0; i < array.length; i++) {
      let duplicate = false;
      renderedcity.forEach(element => {
        if (element.city === array[i].city) {
          duplicate = true;
        }
      });
      if (duplicate === false) {
        renderedcity.push(array[i]);
      }
    }
    console.log(renderedcity.slice(0, 10));
    this.fetchCityDescription(renderedcity.slice(0, 10));
  }

  fetchCityDescription(cities) {
    cities.forEach(async element => {
      const response = await citydescription.get("", {
        params: {
          titles: element.city
        }
      });
      element.description =
        response.data.query.pages[
          Object.keys(response.data.query.pages)[0]
        ].extract;
    });
    setTimeout(() => {
      this.setState({ cities: cities });
    }, 500);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          {this.state.country !== "brak" ? (
            <p className="container__title">
              TOP 10 most polluted cities in {this.state.country}:
            </p>
          ) : null}
          <CitiesList cities={this.state.cities} />
        </div>
      </div>
    );
  }
}
