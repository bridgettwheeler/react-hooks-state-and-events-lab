import React from "react";

function Item({ name, category }) {
  function Button() {
    const [isClicked, setIsOn] = useState(false);

    function handleClick() {
      setIsOn((isClicked) => !isClicked);
    }
    
  }
  const itemClass = isClicked ? "in-cart" : " "

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
