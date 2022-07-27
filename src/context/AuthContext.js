import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginService, registerService } from "../service/auth.js";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("token");
    const userSaved = JSON.parse(user);
    setUser(userSaved);
  }, []);

  const login = async () => {
    const userResponse = await loginService({ email, password });
    const { token } = userResponse;
    if (token) {
      localStorage.setItem("token", JSON.stringify(userResponse));
      setUser(userResponse);
      navigate("/");
      setEmail("");
      setPassword("");
    } else {
      setLoginError(userResponse);
      setEmail("");
      setPassword("");
    }
  };

  const logout = () => {
    setUser("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const register = async (user) => {
    const registerResponse = await registerService(user);
    const { token } = registerResponse;
    if (token) {
      navigate("/login");
      setUsername("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
    } else {
      setRegisterError(registerResponse);
      setEmail("");
      setPassword("");
      setUsername("");
      setPasswordConfirmation("");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        email,
        setEmail,
        password,
        setPassword,
        login,
        username,
        setUsername,
        register,
        passwordConfirmation,
        setPasswordConfirmation,
        loginError,
        registerError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
