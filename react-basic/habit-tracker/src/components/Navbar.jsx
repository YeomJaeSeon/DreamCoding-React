import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <h1 className="navbar">
        <i className="fas fa-leaf"></i>
        <span className="navbar-text">Habit Tracker</span>
        <span className="habit-count">{this.props.habitCount}</span>
      </h1>
    );
  }
}

export default Navbar;
