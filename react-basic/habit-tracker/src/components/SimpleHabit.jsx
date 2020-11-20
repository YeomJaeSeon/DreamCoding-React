import React, { memo, useEffect, useState, useCallback } from 'react';

const SimpleHabit = memo(() => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
    // this.setState({count : this.state.count + 1});과 같다.
  }, [count]);

  useEffect(() => {
    console.log('updated');
  }, [count]);
  return (
    <li className="habit">
      <span span className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus"></i>
      </button>
    </li>
  );
});

export default SimpleHabit;
