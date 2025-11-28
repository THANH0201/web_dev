import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignup = function (setIsAuthenticated, email, password, password2) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password2 !== password) {
      setError("Passwords do not match");
      return;
    }
    console.log(email);
    console.log(password);
    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, password2 }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return {
    handleSignup,
    error,
    setError,
  };
};

export default useSignup;