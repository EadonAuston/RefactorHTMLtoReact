import React from "react";
import CharacterRatings from "./CharacterRatings";
import CharacterCards from "./CharacterCards";

class FullMAlchemist extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <header>
          <h1>Fullmetal Alchemist</h1>
          <nav>
            <li>about us</li>
            <li>info</li>
            <li>support us</li>
          </nav>
        </header>
        <CharacterRatings data={data} />
        <CharacterCards data={data} />
      </>
    );
  }
}
export default FullMAlchemist;
