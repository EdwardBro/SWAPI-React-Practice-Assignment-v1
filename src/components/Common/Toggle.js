import React from "react";
import People from "./People";
import Species from "./Species";
import "./Style.scss";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleSpeciesClick = this.handleSpeciesClick.bind(this);
    this.handlePeopleClick = this.handlePeopleClick.bind(this);
  }

  handleSpeciesClick() {
    this.setState({ isToggleOn: true });
  }

  handlePeopleClick() {
    this.setState({ isToggleOn: false });
  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    let button;
    if (this.state.isToggleOn) {
      button = <SpeciesButton onClick={this.handlePeopleClick} />;
    } else {
      button = <PeopleButton onClick={this.handleSpeciesClick} />;
    }
    return (
      <div>
        {button}
        <br />
        <br />
        <TableRender isToggleOn={isToggleOn} />
      </div>
    );
  }
}

function TableRender(props) {
  const isToggleOn = props.isToggleOn;
  if (isToggleOn) {
    return <Species />;
  }
  return <People />;
}

function SpeciesButton(props) {
  return (
    <button className="App-button" onClick={props.onClick}>
      Species
    </button>
  );
}

function PeopleButton(props) {
  return (
    <button className="App-button" onClick={props.onClick}>
      People
    </button>
  );
}

export default Toggle;
