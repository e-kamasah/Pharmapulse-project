import useAuthStore from "@/zustand/auth-store";
import { useNavigate } from "react-router-dom";

const useSignOut = () => {
  const clear = useAuthStore((state) => state.clearState);
  const navigate = useNavigate();

  const signOut = () => {
    clear();

    return navigate("/");
  };

  return {
    signOut,
  };
};

export default useSignOut;
