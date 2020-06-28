import React from "react";
import PropTypes from "prop-types";

class MoviePlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.player = React.createRef();
  }

  componentDidUpdate() {
    const video = this.player.current;

    if (this.props.isHover) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    const {videoPrev, poster} = this.props;

    return (
      <video
        ref={this.player}
        width="280"
        height="175"
        muted="off"
        poster={poster}
        loop = {true}
        preload="none"
      >
        <source src={videoPrev} type="video/mp4"/>
      </video>
    );
  }
}

MoviePlayer.propTypes = {
  videoPrev: PropTypes.string,
  poster: PropTypes.string,
  isHover: PropTypes.bool
};

MoviePlayer.defaultProps = {
  videoPrev: ``,
  poster: ``,
  isHover: false
};

export default MoviePlayer;
