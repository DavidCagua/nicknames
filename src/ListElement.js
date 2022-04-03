import React from "react";

function ListElement({ name }) {
  return <li>{name}</li>;
}

export default React.memo(ListElement);
