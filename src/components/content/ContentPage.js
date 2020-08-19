import React from "react";
import CardInfo from "./CardInfo";

class ContentPage extends React.Component {
  render() {
    const { kids } = this.props;
    console.log("kids",kids)
    return (
      <div>
        {kids.map((id) => {
          return (
            <CardInfo
              key={id} //de la react key
              id={id}
            />
          );
        })}
      </div>
    );
  }
}
export default ContentPage;
