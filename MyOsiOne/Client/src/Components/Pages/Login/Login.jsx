import React, { useState } from "react";
import logo from "../../../assets/image.png";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/login/data",
        inputData
      );
      alert(`response from the backend: ${response.data}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container"></div>
      <div className="row d-flex justify-content-center aling-items-center">
        <div className="col-4 text-center">
          <div className="card my-5 shadow">
            <div className="card-body p-5">
              <div className="">
                <img className="logo" src={logo} alt="Logo" />
              </div>
              <h4 className="card-title mt-5 ">Welcome Back!</h4>
              <p className="card-text text-center mb-4 text-secondary">
                Sign In With Your Account{" "}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-5 px-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="email"
                    value={inputData.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control rounded-5 px-3 mb-4"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    value={inputData.password}
                    onChange={handleInput}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="fw-bolder px-5 btn btn-primary rounded-5"
                  >
                    <Link to="/home">
                    Sign In
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
