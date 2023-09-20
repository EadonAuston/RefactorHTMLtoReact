import React from "react";
React;
// If I don't include the second line the linter will be angry with me on line one saying that "React is unused", but if I get rid
// of line 1, then the website will basically not work at all.
import FullMAlchemist from "./FullMAlchemist";
import { data } from "./data";
function App() {
  return (
    <>
      <FullMAlchemist data={data} />
    </>
  );
}

export default App;
