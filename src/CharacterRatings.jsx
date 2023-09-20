import React from "react";
React;
// If I don't include the second line the linter will be angry with me on line one saying that "React is unused", but if I get rid
// of line 1, then the website will basically not work at all.
import "./character-ratings.css";
function CharacterRatings({ data }) {
  data.sort((a, b) => b.votes - a.votes);
  return (
    <>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {data.map((item, index) =>
            index < 5 ? (
              <tr className={index % 2 === 0 ? "light" : "dark"} key={index}>
                <td>{item.name}</td>
                <td>
                  {item.skillset[0]}, {item.skillset[1]}
                </td>
                <td>{item.votes}</td>
              </tr>
            ) : null
          )}
        </table>
      </section>
    </>
  );
}

export default CharacterRatings;
