//style
import "../components/styles/profile.css";
//custom hooks
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
//react
import { useState } from "react";
//components
import MealForm from "../components/MealForm";
import MealList from "../components/MealList";

function Profile() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  //toggle between Add Meal form, closing form is passed as prop to MealForm component
  const [showForm, setShowForm] = useState(false);
  const closeForm = () => {
    setShowForm(false);
  };

  // Grab past meal posts where the uid matches
  const { documents: meals } = useCollection("foodDiary", ["uid", "==", user.uid]);

  return (
    <div className="profile-container">
      <div className="profile-container__header">
        <h2>FitGoals.org</h2>
        <hr />
        <p style={{ marginBottom: "2px" }}>Wow, user, nice job. Keep it up. Proud of you!</p>
        <span style={{ margin: 0, color: "grey" }}>contact@danieldesu.com</span>
      </div>

      <button onClick={() => setShowForm(true)}>Add Meal</button>

      <div className="userinfo">
        <div className="userinfo__data-row">{meals && <MealList meals={meals} />}</div>
        <div className="userinfo-orange-bottom"></div>
      </div>
      {showForm && <MealForm closeForm={closeForm} />}
      <p id="logoutBtn" onClick={logout}>
        Log Out
      </p>
    </div>
  );
}

export default Profile;
