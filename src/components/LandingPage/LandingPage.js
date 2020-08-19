import React from "react";
import Header from "../header/Header";
import axios from "../../config/axios_config";
import ContentPage from "../content/ContentPage";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kids: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get("/8863.json", {
      params: {
        print: "pretty",
      },
    });
    this.setState({
      kids: response.data.kids,
    });
    console.log("response-->", response);
  }

  render() {
    return (
      <div>
        <Header onSearch={this.onSearch} />
        <ContentPage kids={this.state.kids} />
      </div>
    );
  }
}
export default LandingPage;
