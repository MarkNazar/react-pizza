import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";

import Button from "./Button";
import { getUsername } from "../features/user/userSlice";

function Home() {
  const userName = useSelector(getUsername);

  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName ? (
        <Button type="primary" to="/menu">
          Continue ordering, {userName}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
