import React from "react";
React;
// If I don't include the second line the linter will be angry with me on line one saying that "React is unused", but if I get rid
// of line 1, then the website will basically not work at all.
import "./character-cards.css";
function CharacterCards({ data }) {
  return (
    <>
      <section id="character-cards">
        {data.map((item) => (
          <div className="card" key={item.name}>
            <div className="card-titles">
              <h3>{item.name}</h3>
              <h4>{item.nickName}</h4>
            </div>
            <img src={item.imageUrl} alt="" />
            {/* most of the images were not working so I deleted the part of the url after the extension, i.e. "png" "jpeg" */}
            <p>{item.background}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default CharacterCards;
