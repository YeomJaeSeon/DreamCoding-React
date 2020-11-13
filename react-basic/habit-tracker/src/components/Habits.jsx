import React, { Component } from 'react';
import FormAddHabit from './FormAddHabit';
import Habit from './Habit';
class Habits extends Component {
  render() {
    return (
      <>
        <FormAddHabit onAdd={this.props.onAdd}></FormAddHabit>
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
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
