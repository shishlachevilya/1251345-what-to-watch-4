import React from "react";

const withMainPlayer = (Component) => {
  return class WithMainPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        progress: 0,
        fullTime: `0`,
        elapsedTime: `0`
      };

      this.video = React.createRef();

      this.handlerFullScreeButtonClick = this.handlerFullScreeButtonClick.bind(this);
      this.handlerTogglePlay = this.handlerTogglePlay.bind(this);
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

    componentDidUpdate() {
      const video = this.video.current;

      this.setState({
        fullTime: this.formatTime(video.duration),
        elapsedTime: this.formatTime(video.duration - video.currentTime)
      });
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

    handlerFullScreeButtonClick() {
      const video = this.video.current;

      const fullscreen = video.webkitRequestFullscreen || video.mozRequestFullScreen || video.msRequestFullscreen;
      fullscreen.call(video);
    }

    formatTime(timestamp) {
      let sec = Math.floor(timestamp);
      let h = sec / 3600 ^ 0;
      let m = (sec - h * 3600) / 60 ^ 0;
      let s = sec - h * 3600 - m * 60;

      return `${m.toString().padStart(2, `0`)}:${s.toString().padStart(2, `0`)}`;
    }


    render() {
      const {isPlaying, progress, fullTime, elapsedTime} = this.state;

      return (
        <Component
          {...this.props}
          ref={this.video}
          isPlaying={isPlaying}
          progress={progress}
          fullTime={fullTime}
          elapsedTime={elapsedTime}
          onFullScreeButtonClick={this.handlerFullScreeButtonClick}
          onTogglePlay={this.handlerTogglePlay}
        />
      );
    }
  };
};

export default withMainPlayer;
