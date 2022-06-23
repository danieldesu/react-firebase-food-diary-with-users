//components
import Signup from "../components/Signup";
import Login from "../components/Login";

function Home() {
  return (
    <div className="home-container">
      <div className="home-container__header">
        <h2>FitGoals.org</h2>
        <p>Track your food and calories; motivate others and get motivated!</p>
      </div>

      <Signup />
      <Login />

      <div className="home-container__showcase-header">
        <hr />
        <p>What is this?</p>
      </div>
      <div className="home-container__showcase">
        <div className="home-container__showcase-item">
          <h3>Register for free</h3>
          <p>No hidden fees and no hidden data collection</p>
        </div>
        <div className="home-container__showcase-item">
          <h3>Track your food and calories</h3>
          <p>Attain your fitness goals by remaining consistent</p>
        </div>
        <div className="home-container__showcase-item">
          <h3>Show your progress to yourself and others</h3>
          <p>Prove to yourself and others it can be done</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
