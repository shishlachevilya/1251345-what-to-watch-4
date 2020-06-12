import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {info, moviesTitleList} = props;

  return (
    <Main
      info={info}
      moviesTitleList={moviesTitleList}
    />
  );
};

App.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
  moviesTitleList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
