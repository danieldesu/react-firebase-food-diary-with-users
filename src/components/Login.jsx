//react
import { useState } from "react";
//custom hooks
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();

  //handle login submit
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="home-container__login">
      <h3>
        Already a user? <span>Login</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {
          //firebase error
          error && <p>{error}</p>
        }
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
