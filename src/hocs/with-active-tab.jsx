import React from "react";
import {TabLabel} from "../mocks/tabs";

const withActiveTab = (Component) => {
  return class WithActiveTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabLabel.OVERVIEW,
      };

      this.handlerChangeActiveTab = this.handlerChangeActiveTab.bind(this);
    }

    handlerChangeActiveTab(label) {
      this.setState({
        activeTab: label
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onChangeActiveTab={this.handlerChangeActiveTab}
          activeTab={this.state.activeTab}
        />
      );
    }
  };
};

export default withActiveTab;
