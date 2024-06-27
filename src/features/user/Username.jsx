import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

const Username = () => {
  const userName = useSelector(getUsername);
  if (!userName) return null;

  return (
    <div className="hidden text-xl font-semibold md:block">{userName}</div>
  );
};

export default Username;
