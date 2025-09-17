// src/components/BurgerStack/BurgerStack.jsx
const BurgerStack = (props) => {
  const { ingredients = [], removeFromBurger } = props;

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>
          <span style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
          </span>
          <button onClick={() => removeFromBurger(index)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
