import { useContext } from "react";
import Chat from "../chat";
import Login from "./login";
import { AuthContext } from "../../context/auth.context";

const Authentication = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Chat /> : <Login />;
};

export default Authentication;
