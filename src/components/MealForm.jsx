//react
import { useState } from "react";
//firebase
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
//custom hooks
import { useAuthContext } from "../hooks/useAuthContext";
//style
import "./styles/mealform.css";

function MealForm({ closeForm }) {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [time, setTime] = useState("");
  const { user } = useAuthContext();

  //getting current year and limiting date input in form to be within current year
  const d = new Date();
  let year = d.getFullYear();
  let janYear = year + "-01-01";
  let decYear = year + "-12-31";

  //handle submit of new item through form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "foodDiary");

    await addDoc(ref, {
      food: food,
      calories: calories,
      time: time,
      uid: user.uid,
    });
    setFood("");
    setCalories("");
    setTime("");
  };

  return (
    <div className="mealModal">
      <form onSubmit={handleSubmit}>
        <p onClick={closeForm}>Close Form</p>
        <label>
          <span>Food</span>
          <input
            required
            type="text"
            onChange={(e) => setFood(e.target.value)}
            value={food}
            placeholder="Food"
          />
        </label>

        <label>
          <span>Calories</span>
          <input
            required
            type="number"
            onChange={(e) => setCalories(e.target.value)}
            value={calories}
            placeholder="Calories"
          />
        </label>

        <label>
          <span>Date</span>
          <input
            required
            type="date"
            min={janYear}
            max={decYear}
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </label>

        <button>Submit Meal</button>
      </form>
    </div>
  );
}

export default MealForm;
