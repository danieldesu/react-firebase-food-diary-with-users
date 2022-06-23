//react
import { useState } from "react";
//custom hooks
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [pwInput, setPwInput] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [displayError, setDisplayError] = useState("");
  const { error, signup } = useSignup();

  //show password inputs once user begins writing email
  const revealPasswordInput = () => {
    setPwInput(false);
  };

  // Handle signup form, test that passwords match
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayError("");
    if (password === passwordConfirm) {
      signup(email, password);
    } else {
      setDisplayError("Passwords did not match!");
    }
  };

  return (
    <div className="home-container__register">
      <form id="register-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          onChange={(e) => {
            setEmail(e.target.value);
            revealPasswordInput();
          }}
          value={email}
        />
        <input
          className={pwInput ? "visibility-hidden" : ""}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <input
          className={pwInput ? "visibility-hidden" : ""}
          type="password"
          placeholder="Repeat password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <button>Register</button>
        {displayError && <p>{displayError}</p>}
        {
          //firebase error...
          error && <p>{error}</p>
        }
      </form>
    </div>
  );
}

export default Signup;
