//style
import "./App.css";
//react
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
//components
import Home from "./pages/Home";
import Profile from "./pages/Profile";
//firebase
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <Router>
          <Routes>
            <Route path="/" element={user ? <Navigate replace to="/profile" /> : <Home />} />
            <Route path="/profile" element={!user ? <Navigate replace to="/" /> : <Profile />} />
            <Route
              path="*"
              element={
                <p>
                  Nothing here... <Link to="/">click to go home</Link>
                </p>
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
