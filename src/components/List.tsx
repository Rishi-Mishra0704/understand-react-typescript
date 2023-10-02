import React from "react";

interface itemProps {
  items: (number | string | [string, number])[];
}

const List: React.FC<itemProps> = (props) => {
  return (
    <div>
      {props.items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default List;
