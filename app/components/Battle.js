import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import PropTypes from "prop-types";

function Instructions() {
  return (
    <div className="instructions-container">
      <h1 className="center-text bg-light">instruction</h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">Enter two github users</h3>
          <FaUserFriends
            className="bg-light"
            color="rgb(255,191,116)"
            size={140}
          />
        </li>
        <li>
          <h3 className="header-sm">Battle</h3>
          <FaFighterJet className="bg-light" color="#727272" size={140} />
        </li>
        <li>
          <h3 className="header-sm">See the winner</h3>
          <FaTrophy className="bg-light" color="rgb(255,215,0)" size={140} />
        </li>
      </ol>
    </div>
  );
}

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.prevenDefault();

    this.props.onSubmit(this.state.username);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <form className="column player" onSubmit={handleSubmit}>
        <label htmlFor="username" className="player-label">
          this.props.label
        </label>
        <div className="row player-inputs">
          <input
            type="text"
            id="username"
            className="input-light"
            placeholder="github username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-dark"
            type="submit"
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.prototype = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
        <PlayerInput />
      </React.Fragment>
    );
  }
}

export default Battle;
