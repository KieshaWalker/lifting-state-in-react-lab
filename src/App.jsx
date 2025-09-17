import { useState } from 'react'
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import './App.css';

const App = () => {
  const [burgerIngredients, setBurgerIngredients] = useState([]);

  const addToBurger = (addingredient) => {
    setBurgerIngredients( event => [...event, addingredient]);
    console.log('added', addingredient);
  };

  // Accept an index and remove that item from the burger
  const removeFromBurger = (indexToRemove) => {
    setBurgerIngredients(event => event.filter((_, i) => i !== indexToRemove));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList addToBurger={addToBurger} />
      </section>
      <section>
        <BurgerStack ingredients={burgerIngredients} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
