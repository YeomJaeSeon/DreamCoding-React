import React, { PureComponent } from 'react';
import FormAddHabit from './FormAddHabit';
import Habit from './Habit';
class Habits extends PureComponent {
  render() {
    console.log('Habits');
    return (
      <div>
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
      </div>
    );
  }
}

export default Habits;
