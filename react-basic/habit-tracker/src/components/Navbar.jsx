import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    console.log('Navbar');
    return (
      <nav className="navbar">
        <i className="fas fa-leaf"></i>
        <span className="navbar-text">Habit Tracker</span>
        <span className="habit-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
