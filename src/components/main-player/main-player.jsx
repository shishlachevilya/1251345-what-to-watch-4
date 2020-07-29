import React from "react";
import {connect} from "react-redux";
import {toggleMainPlayer} from "../../reducer";
import PropTypes from "prop-types";
import withMainPlayer from "../../hocs/with-main-player";

// eslint-disable-next-line react/display-name
const MainPlayer = React.forwardRef((props, ref) => {
  const {
    onCloseButtonClick,
    isPlaying,
    progress,
    elapsedTime,
    fullTime,
    onFullScreeButtonClick,
    onTogglePlay
  } = props;

  const renderPlayIcon = () => {
    return (
      <>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </>
    );
  };

  const renderPauseIcon = () => {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 76 96" fill="none">
          <path d="M72.1999 41.6L12.3999 1.8C7.2999 -1.6 0.399902 2.1 0.399902 8.2V87.7C0.399902 93.9 7.2999 97.5 12.3999 94.1L72.1999 54.3C76.6999 51.4 76.6999 44.6 72.1999 41.6Z" fill="#FFF9D9"/>
        </svg>
        <span>Play</span>
      </>
    );
  };

  return (
    <div className="player" style={{backgroundColor: `#000000`}}>
      <video
        className="player__video"
        ref={ref}
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
            onClick={onTogglePlay}
          >
            {isPlaying ? renderPauseIcon() : renderPlayIcon()}
          </button>

          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreeButtonClick}
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
});

MainPlayer.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  onFullScreeButtonClick: PropTypes.func.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  fullTime: PropTypes.string.isRequired,
  elapsedTime: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onCloseButtonClick() {
    dispatch(toggleMainPlayer());
  },
});

export {MainPlayer};

export default connect(null, mapDispatchToProps)(withMainPlayer(MainPlayer));
