import React from "react";
import axios from "../../config/axios_config";
import "./CardInfo.css";

class CardInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      item: {},
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    this.setState({ loading: true });
    const response = await axios.get(`${id}.json`, {
      params: {
        print: "pretty",
      },
    });
    this.setState({
      item: response.data,
      loading: false,
    });
    console.log("response1-->", response);
  }

  createMarkup = () => { //  delimitarea textelor <p> <a> ...   dangerouslySetInnerHTML
    return { __html: this.state.item.text };
  };

  render() {
    const { item, loading } = this.state;

    if (loading) {
      return (
        <div style={{textAlign:"center"}}>
          <i className="fas fa-spinner fa-2x"></i> Loading ... <i className="fas fa-spinner fa-2x"></i>
        </div>
      );
    }
    return (
      <div className="card">
        <div style={{ paddingLeft: "15px" }}>
          <div className="cursor">
            <p dangerouslySetInnerHTML={this.createMarkup()}></p>
            <a>{item.url}</a>
          </div>
          <div>
            <small className="small">{item.parent} points</small>
            <small>|</small>
            <small className="small">{item.by}</small>
            <small>|</small>
            <small className="small">
              {new Date(item.time).toDateString()}
            </small>
            <small>|</small>
            <small className="small">{item.type}</small>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default CardInfo;
