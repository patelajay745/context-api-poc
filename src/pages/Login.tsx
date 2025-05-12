import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const dummyUser = {
  id: "1",
  name: "Ajay Patel",
  email: "ajay@ajaypatel.live",
};

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    login(dummyUser);
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        className="bg-blue-500 rounded-xl text-white shadow-2xl py-2 px-8"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
};
