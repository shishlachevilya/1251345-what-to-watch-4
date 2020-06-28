import React from "react";
import PropTypes from "prop-types";

const TabItem = (props) => {
  const {label, onChangeActiveTab} = props;

  return (
    <a
      href="#"
      className="movie-nav__link"
      onClick={(e) => {
        e.preventDefault();
        onChangeActiveTab(label);
      }}
    >
      {label}
    </a>
  );
};

TabItem.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired
};

export default TabItem;
