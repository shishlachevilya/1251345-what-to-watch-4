import React from "react";
import PropTypes from "prop-types";
import TabItem from "../tab-item/tab-item";

const TabNav = (props) => {
  const {tabs, activeItem, onChangeActiveTab} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(tabs).map((tab) => {
          return (
            <li key={tab} className={`movie-nav__item ${tab === activeItem ? `movie-nav__item--active` : ``}`}>
              <TabItem
                label={tab}
                onChangeActiveTab={onChangeActiveTab}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

TabNav.propTypes = {
  tabs: PropTypes.objectOf(PropTypes.string).isRequired,
  activeItem: PropTypes.string.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired
};

export default TabNav;
