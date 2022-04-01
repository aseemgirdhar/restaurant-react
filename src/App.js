import FoodItems from "./components/food-items";
import app from './App.css'
import Drinks from "./components/drinks/drinks";

function App() {
    
    
  const data =
    [
        {
            rType: 'veg',
            rDish: 'Dal Makhni',
            rImg: 'https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/dal-makhani-recipe-1.jpg',
            rPrice: 190

        },
        {
            rType: 'non Veg',
            rImg: 'https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-2-500x500.jpg',
            rDish: 'Chicken Curry',
            rPrice: 290
        },
    ]

    const drinks =
        [
            {
                rType: 'Mocktail',
                rDish: 'Mojito',
                rPrice: 190

            },
            {
                rType: 'Cocktail',
                rDish: 'Blue sea',
                rPrice: 290
            },
            {
                rType: 'Cocktail',
                rDish: 'Pepsi',
                rPrice: 390
            },
            {
                rType: 'Cocktail',
                rDish: 'Fanta',
                rPrice: 490
            },
        ]

  return (
      <div className='main'>
          <h1>Aseem's Restaurant</h1>
          <h2>🥗 Food Items 🥗</h2>

            <div className="main">
             {data.map((items) => <FoodItems   rType={items.rType} rImg={items.rImg} rDish={items.rDish} rPrice={items.rPrice}  />)}
            </div>
          <h2>🥡 Drinks 🥡</h2>
          {drinks.map((item) =>  <Drinks  rType={item.rType} rDish={item.rDish} rPrice={item.rPrice} /> )}

      </div>
  );
}

export default App;
