import React from "react";
import {TabLabel} from "../mocks/tabs";

const withActiveItem = (Component) => {
  return class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: TabLabel.OVERVIEW,
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
