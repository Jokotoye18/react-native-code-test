import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";

export const useAuthProvider = () => {
  const dispatch = useContext(AuthContext)?.dispatch;
  const auth = useContext(AuthContext)?.state;

  return { auth, dispatch };
};
