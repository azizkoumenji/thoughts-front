import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { logUser } from "../../reducers/loggedUserReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./Login.css";

const Login = ({ visibility, setVisibility }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logUser({ username, password }));
    navigate("/home");
  };

  if (visibility) {
    return (
      <div className="z-10 absolute h-screen w-screen flex justify-center backdrop-blur-xl fadein items-center">
        <Card className="md:w-[50%] sm:w-[75%] max-sm:w-[98%] my-[10%] flex flex-col-">
          <CardHeader>
            <p className="font-bold text-3xl text-center w-full">Sign in</p>
          </CardHeader>
          <CardBody>
            <form
              onSubmit={handleSubmit}
              className="h-full flex flex-col justify-center gap-5"
            >
              <Input
                type="text"
                label="Username"
                onChange={(event) => setUsername(event.target.value)}
              ></Input>
              <Input
                type="password"
                label="Password"
                onChange={(event) => setPassword(event.target.value)}
              ></Input>
              <div className="flex gap-5">
                <Button color="primary" type="submit" className="basis-1/2">
                  Sign in
                </Button>
                <Button
                  color="danger"
                  className="basis-1/2"
                  onClick={() => setVisibility(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return null;
  }
};

Login.propTypes = {
  visibility: PropTypes.bool,
  setVisibility: PropTypes.func,
};

export default Login;
