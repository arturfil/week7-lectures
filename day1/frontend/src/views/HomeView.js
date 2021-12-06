import { useContext, useEffect } from "react";
import { DishContext } from "../context/DishContext";

const HomeView = () => {
  const { dishes, getDishesFromApi } = useContext(DishContext);

  useEffect(() => {
    getDishesFromApi();
  }, [])

  return (
    <div className="container mt-5">
        <h2>Dishes Application</h2>
        { dishes.length === 0 && <h4>Couldn't get the Dishes data</h4>}
        { dishes?.map((dish) => (
          <h2 key={dish._id}>{dish.name}</h2>
        ))}
    </div>
  );
};

export default HomeView;
