import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user, "Home");
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  return <p>Home</p>;
};

export default Home;
