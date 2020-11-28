import React from "react";
// import PropTypes from 'prop-types'

const HabitItem = ({ title, progress }) => {
  return (
    <li>
      <h3>{title}</h3>
      <div>{progress}%</div>
    </li>
  );
};

// HabitItem.propTypes = {

// }

export default HabitItem;
