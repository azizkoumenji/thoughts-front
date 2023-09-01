import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { Logo } from "../icons/Logo";
import { Link } from "react-router-dom";

export const NewUser = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Logo classes={"ml-10 mt-5 mb-5 basis-1/6"} />
      <div className="flex flex-col items-center h-full basis-5/6">
        <Card className="w-[60%] px-7 m-5">
          <CardHeader className="font-bold text-2xl mt-3">
            <p className="text-center w-full">Create your account</p>
          </CardHeader>
          <CardBody className="gap-5">
            <div className="flex gap-5">
              <Avatar showFallback radius="md" size="lg" />
              <Input type="name" label="Name" />
            </div>
            <Input type="username" label="Username" />
            <Input type="email" label="Email" />
            <Input type="date" />
            <Input type="password" label="Password" />
          </CardBody>
          <CardFooter className="flex gap-3">
            <Button color="primary" className="font-semibold basis-1/2">
              Sign up
            </Button>
            <Button
              color="danger"
              variant="flat"
              className="font-semibold basis-1/2"
            >
              <Link
                to="/"
                className="w-full h-full flex justify-center items-center"
              >
                <p>Cancel</p>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
