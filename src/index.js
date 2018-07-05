import React from "react";
import ReactDom from "react-dom";
import List from "./ListHelpers/List";
import Modal from "./ModalHelpers/modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideModal: true
    };
  }

  toggleModal(e) {
    this.setState({ hideModal: !this.state.hideModal });
  }

  render() {
    return (
      <div style={styles}>
        <h2>We're rendering... yay! {"\u2728"}</h2>
        <div>
          <button type="button" onClick={this.toggleModal.bind(this)}>
            MODAL
          </button>
          {this.state.hideModal ? null : (
            <Modal closeModal={this.toggleModal.bind(this)} />
          )}
        </div>
        <div>
          <List />
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
