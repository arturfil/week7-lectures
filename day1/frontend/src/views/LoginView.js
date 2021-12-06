import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./LoginView.css";

const LoginView = () => {
  const { loginUserFromApi } = useContext(AuthContext);
  const [formUser, setFormUser] = useState({
    email: "",
    password: "",
  });
 

  const handleChange = (event) => {
    setFormUser({
      ...formUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUserFromApi(formUser);
  }

  return (
    <div className="container mt-5">
      <form className="form">
        <h2>Login</h2>
        <input
          name="email"
          value={formUser.email}
          onChange={handleChange} 
          className="form-control" 
          type="text" 
          placeholder="email" 
        />
        <input
          name="password"
          value={formUser.password}
          onChange={handleChange}
          className="form-control"
          type="password"
          placeholder="password"
        />
        <button 
          onClick={handleSubmit} 
          className="form-control btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginView;
