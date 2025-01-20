import { useState } from "react";

interface itemsProps {
  List: string[];
  heading: string;
}

// function ListGroup(props:itemsProps) {
// const Maped = props.List.map((arr, index) => (
function ListGroup({ List, heading }: itemsProps) {
  const [atual, SetIndex] = useState(-1);

  const Maped = List.map((arr, index) => (
    <li
      key={arr + index}
      onClick={() => SetIndex(index)}
      className={atual == index ? "list-group-item active" : "list-group-item"}
    >
      {arr != "" ? arr : "Not Registered"}
    </li>
  ));
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group ">{Maped}</ul>
    </>
  );
}

export default ListGroup;
