import React from "react";

const withPlayer = (Component) => {
  return class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isHover: false,
      };

      this.timeout = null;

      this.handlerCardMouseOver = this.handlerCardMouseOver.bind(this);
      this.handlerCardMouseLeave = this.handlerCardMouseLeave.bind(this);
    }

    handlerCardMouseOver() {
      this.timeout = setTimeout(() => {
        this.setState({isHover: true});
      }, 1000);
    }

    handlerCardMouseLeave() {
      clearTimeout(this.timeout);
      this.setState({isHover: false});
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }

    render() {
      const {isHover} = this.state;

      return (
        <Component
          {...this.props}
          onMouseOver={this.handlerCardMouseOver}
          onMouseLeave={this.handlerCardMouseLeave}
          isHover={isHover}
        />
      );
    }
  };
};

export default withPlayer;
