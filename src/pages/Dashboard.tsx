import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <h2 className="text-2xl">Welcome, {user?.name}</h2>
      <button
        className="bg-black rounded-xl text-white shadow-2xl py-2 px-8"
        onClick={() => {
          logout();
          navigate("login");
        }}
      >
        Logout
      </button>
    </div>
  );
};
