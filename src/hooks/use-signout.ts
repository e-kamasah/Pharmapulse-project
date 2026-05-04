import { useNavigate } from "react-router-dom";

const useSignOut = () => {
  const navigate = useNavigate();

  const signOut = () => {
    return navigate("/");
  };

  return {
    signOut,
  };
};

export default useSignOut;
