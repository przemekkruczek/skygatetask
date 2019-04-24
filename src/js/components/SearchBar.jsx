import React from "react";
import countries from "./countries";
import Downshift from "downshift";
import { relative } from "path";

export class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };
  }
  onInputChange = ({ inputValue }) => {
    return inputValue && this.setState({ term: inputValue });
  };
  onFormSubmit = event => {
    if (countries.includes(this.state.term)) {
      event.preventDefault();
      this.props.onFormSubmit(this.state.term);
    }
  };

  render() {
    return (
      <div className="search-bar">
        <form
          className="search-bar__form"
          autoComplete="true"
          onSubmit={this.onFormSubmit}
        >
          <div className="search-bar__label">
            <label>
              Countries Search:{" "}
              <span className="search-bar__label-span">
                (You can only choose France, Germany, Poland or Spain)
              </span>
            </label>
          </div>
          <div className="search-bar__field">
            <div className="search-bar__field-avatar">
              <i className="fas fa-search" />
            </div>
            <div className="search-bar__field-line" />
            <Downshift
              onStateChange={this.onInputChange}
              selectedItem={this.state.term}
              onChange={selection => alert(`You selected ${selection}`)}
            >
              {({
                getInputProps,
                getItemProps,
                getLabelProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem
              }) => (
                <div className="search-bar__field-container">
                  <input
                    {...getInputProps()}
                    placeholder="Country..."
                    className="search-bar__field-input"
                  />
                  {isOpen ? (
                    <div>
                      {countries
                        .filter(i => !inputValue || i.includes(inputValue))
                        .map((item, index) => (
                          <div
                            {...getItemProps({
                              key: item,
                              index,
                              item: item,
                              style: {
                                position: "relative",
                                zIndex: 1,
                                backgroundColor:
                                  highlightedIndex === index
                                    ? "lightgray"
                                    : "white",
                                fontWeight:
                                  selectedItem === item ? "bold" : "normal"
                              }
                            })}
                          >
                            {item}
                          </div>
                        ))}
                    </div>
                  ) : null}
                </div>
              )}
            </Downshift>
          </div>
        </form>
      </div>
    );
  }
}
