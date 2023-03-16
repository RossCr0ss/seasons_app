import React from "react";
import { createRoot } from "react-dom/client";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    return (
      <div>
        {this.state.errorMessage && !this.state.lat && <p>Error: {this.state.errorMessage}</p>}
        {!this.state.errorMessage && this.state.lat && <p>Latitude: {this.state.lat}</p>}
        {!this.state.errorMessage && !this.state.lat && <p>Loading...</p>}
      </div>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
