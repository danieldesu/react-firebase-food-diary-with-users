//firebase
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
//style
import "./styles/meallist.css";
//image
import deleteIcon from "../assets/trashcan.png";

function MealList({ meals }) {
  //handle delete click
  const handleClick = async (id) => {
    const ref = doc(db, "foodDiary", id);
    await deleteDoc(ref);
  };

  //months array for .getMonth()
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //show date in a nice format rather than default as submitted and saved through the html form when added to db
  const handleDate = (yearMonthDay) => {
    let formattedDate = new Date(yearMonthDay);
    let month = months[formattedDate.getMonth()];
    formattedDate = `${formattedDate.getDate()} ${month} ${formattedDate.getFullYear()}`;
    return formattedDate;
  };

  //sort meals by date
  let mealsDescending = meals.sort((a, b) => {
    if (a.time > b.time) {
      return -1;
    } else if (b.time > a.time) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div className="meal-list">
      <ul>
        {mealsDescending.map((meal) => (
          <li key={meal.id}>
            <span className="mealDate">{handleDate(meal.time)}</span>{" "}
            <span className="mealFood">{meal.food}</span>{" "}
            <span className="mealCalories">{meal.calories} calories</span>
            <span className="mealDelete" onClick={() => handleClick(meal.id)}>
              <img src={deleteIcon} alt="X" width="16px" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealList;
