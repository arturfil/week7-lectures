import { createContext, useEffect, useState } from "react";
import apiHelper from "../apiHelper/apiHelper";

export const DishContext = createContext({});

const DishProvider = ({children}) => {
  const [dishes, setDishes] = useState([]);
  const [singleDish, setSingleDish] = useState({
    name: "",
    ingredients: [],
    price: 0,
    allergens: [],
    calories: 0
  });

  useEffect(() => {
    getDishesFromApi();
  }, [])

  const getDishesFromApi = async () => {
    try {
      const response = await apiHelper("/dishes");
      setDishes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DishContext.Provider
      value={{
        dishes,
        singleDish,
        getDishesFromApi
      }}
    >
      {children}
    </DishContext.Provider>
  )

}

export default DishProvider;