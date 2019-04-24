import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__grid" />
        <div className="header__logo">
          <h1 className="header__logo-title">Most Polluted Cities Library</h1>
        </div>
      </header>
    );
  }
}
