import React from "react";
import { createRoot } from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderWrapper = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <p>Error: {this.state.errorMessage}</p>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.errorMessage && !this.state.lat) {
      return <Spinner message="Please accept location request" />;
    }
  };
  render() {
    return <div className="border red">{this.renderWrapper()}</div>;
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
