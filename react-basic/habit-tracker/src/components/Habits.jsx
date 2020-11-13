import React, { Component } from 'react';
import Habit from './Habit';
class Habits extends Component {
  reset = () => {
    this.props.onReset();
  };
  render() {
    return (
      <>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.reset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
