import React, { Fragment, Component } from "react";

import ListItem from "./ListItem";
import * as Animate from "../animate";

let AnimatedListItem = Animate.fadeIn(ListItem, 1);

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: ["apple", "orange", "banana"],
      valueToBeAdded: ""
    };
  }

  addItem(e) {
    this.setState(prevState => {
      prevState.elements.push(prevState.valueToBeAdded);
      prevState.valueToBeAdded = "";
      return prevState;
    });
  }

  updateValueToBeAdded(e) {
    this.setState({
      valueToBeAdded: e.target.value
    });
  }

  render() {
    return (
      <div style={{ padding: "1rem 0" }}>
        <input
          type="text"
          placeholder="Add something!"
          value={this.state.valueToBeAdded}
          onChange={this.updateValueToBeAdded.bind(this)}
        />
        <button type="button" onClick={this.addItem.bind(this)}>
          +
        </button>
        <div className="list">
          {this.state.elements.map((element, index) => {
            return <AnimatedListItem item={element} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default List;
