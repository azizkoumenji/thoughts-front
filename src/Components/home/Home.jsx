import { Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { outUser } from "../../reducers/loggedUserReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user, "Home");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(outUser());
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      setTimeout(1000, () => {
        navigate("/");
      });
    }
  }, [user, navigate]);

  return (
    <div>
      <p>Home</p>
      <Button color="danger" variant="ghost" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};

export default Home;
