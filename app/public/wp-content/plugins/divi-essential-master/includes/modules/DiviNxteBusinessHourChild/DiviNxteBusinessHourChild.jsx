import React, { Component } from "react";
import { Title } from "../base/common";

class DiviNxteBusinessHourChild extends Component {
  static slug = "dnxte_business_hour_child";

  render() {
    return (
      <div className="dnxte-Busihr-wekname">
        <Title
          title={this.props.dnxte_businesshour_title}
          dynamicTitle={this.props.dynamic.dnxte_businesshour_title}
          tag="span"
          classes="dnxte-Busihr-dtday"
        />
        <div className="dnxte-Busihr-separator"></div>
        <Title
          title={this.props.dnxte_businesshour_time}
          dynamicTitle={this.props.dynamic.dnxte_businesshour_time}
          tag="span"
          classes="dnxte-Busihr-dttime"
        />
      </div>
    );
  }
}

export default DiviNxteBusinessHourChild;
