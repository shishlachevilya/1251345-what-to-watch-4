import React from "react";
import {connect} from "react-redux";
import {toggleMainPlayer} from "../../reducer";
import PropTypes from "prop-types";

class MainPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      progress: 0,
      fullTime: 0,
      elapsedTime: 0
    };

    this.video = React.createRef();

    this.handlerFullScreeButtonClick = this.handlerFullScreeButtonClick.bind(this);
    this.handlerTogglePlay = this.handlerTogglePlay.bind(this);
    this.renderPlayIcon = this.renderPlayIcon.bind(this);
    this.renderPauseIcon = this.renderPauseIcon.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  componentDidMount() {
    const video = this.video.current;

    video.ontimeupdate = () => {
      this.setState({
        progress: video.currentTime
      });
    };
  }

  formatTime(timestamp) {
    let sec = Math.floor(timestamp);
    let h = sec / 3600 ^ 0;
    let m = (sec - h * 3600) / 60 ^ 0;
    let s = sec - h * 3600 - m * 60;

    return ((m < 10 ? `0` + m : m) + `:` + (s < 10 ? `0` + s : s));
  }

  componentDidUpdate() {
    const video = this.video.current;

    this.setState({
      fullTime: this.formatTime(video.duration),
      elapsedTime: this.formatTime(video.duration - video.currentTime)
    });
  }

  handlerFullScreeButtonClick() {
    const video = this.video.current;

    const fullscreen = video.webkitRequestFullscreen || video.mozRequestFullScreen || video.msRequestFullscreen;
    fullscreen.call(video);
  }

  handlerTogglePlay() {
    const video = this.video.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    this.setState((state) => {
      return {
        isPlaying: !state.isPlaying
      };
    });
  }

  renderPlayIcon() {
    return (
      <>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </>
    );
  }

  renderPauseIcon() {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 76 96" fill="none">
          <path d="M72.1999 41.6L12.3999 1.8C7.2999 -1.6 0.399902 2.1 0.399902 8.2V87.7C0.399902 93.9 7.2999 97.5 12.3999 94.1L72.1999 54.3C76.6999 51.4 76.6999 44.6 72.1999 41.6Z" fill="#FFF9D9"/>
        </svg>
        <span>Play</span>
      </>
    );
  }

  render() {
    const {isPlaying, progress, elapsedTime, fullTime} = this.state;
    const {onCloseButtonClick} = this.props;

    return (
      <div className="player" style={{backgroundColor: `#000000`}}>
        <video
          className="player__video"
          ref={this.video}
          width="100%"
          height="100%"
          poster="img/player-poster.jpg"
          loop={false}
          autoPlay={true}
          controls={false}
        >
          <source src="https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4" type="video/mp4"/>
        </video>

        <button
          type="button"
          className="player__exit"
          onClick={onCloseButtonClick}
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100"></progress>
              <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{`${elapsedTime}/${fullTime}`}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this.handlerTogglePlay}
            >
              {isPlaying ? this.renderPauseIcon() : this.renderPlayIcon()}
            </button>

            <div className="player__name">Transpotting</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={this.handlerFullScreeButtonClick}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

MainPlayer.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCloseButtonClick() {
    dispatch(toggleMainPlayer());
  },
});

export default connect(null, mapDispatchToProps)(MainPlayer);
