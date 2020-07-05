import React from "react";

const withActiveItem = (Component, defaultItemLabel) => {
  return class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: defaultItemLabel
      };

      this.handlerChangeActiveTab = this.handlerChangeActiveTab.bind(this);
    }

    handlerChangeActiveTab(label) {
      this.setState({
        activeItem: label
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onChangeActiveTab={this.handlerChangeActiveTab}
          activeItem={this.state.activeItem}
        />
      );
    }
  };
};

export default withActiveItem;
