import React from "react";

export const fadeIn = (Target, speed) => {
  const styles = { transition: `"opacity ${speed}s ease-out"` };
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        opacity: "0"
      };
    }

    componentDidMount() {
      this.changeOpacity(0);
    }

    componentDidUpdate(prevProps, prevState) {
      console.log(prevState, "Line 20");
      if (prevState.opacity !== "0") return;
      this.changeOpacity(1);
    }

    changeOpacity(val) {
      this.setState({
        opacity: `${val}`
      });
    }

    render() {
      return (
        <Target
          {...this.props}
          style={{ ...styles, opacity: this.state.opacity }}
        />
      );
    }
  };
};

export const fadeOut = (Target, speed) => {
  const styles = { transition: `"opacity ${speed}s ease-out"` };
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        opacity: "1"
      };
    }

    componentWillUnmount() {
      this.changeOpacity(0);
    }

    changeOpacity(val) {
      val = typeof val === "string" ? val : `${val}`;
      this.setState({
        opacity: val
      });
    }

    render() {
      return (
        <Target
          style={{ ...styles, opacity: this.state.opacity }}
          {...this.props}
        />
      );
    }
  };
};
