import React from "react";

class About extends React.Component {
  componentDidUpdate() {
    console.log("About.js did update");
  }

  render() {
    return <h1>About - Do. Or do not. There is no try.</h1>;
  }
}

export default About;
