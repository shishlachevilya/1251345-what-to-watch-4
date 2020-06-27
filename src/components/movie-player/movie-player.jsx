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
    const {video, poster} = this.props;
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
        <source src={video} type="video/mp4"/>
      </video>
    );
  }
}

MoviePlayer.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isHover: PropTypes.bool.isRequired
};


export default MoviePlayer;
