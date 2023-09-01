import { Avatar, Button, Input } from "@nextui-org/react";
import { Logo } from "../icons/Logo";
import { Link } from "react-router-dom";

export const NewUser = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Logo classes={"ml-10 mt-10 mb-5 basis-1/6"} />
      <div className="flex flex-col items-center min-h-full basis-5/6 max-sm:mx-5 sm:mx-5 content-center">
        <Avatar showFallback radius="md" size="lg" className="sm:hidden mt-5" />
        <div className="lg:w-[60%] md:w-[70%] max-sm:w-full sm:w-full max-sm:px-0 px-7 m-5">
          <div className="font-bold text-3xl mt-3">
            <p className="text-center w-full mb-10">Create your account</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <Avatar
                showFallback
                radius="md"
                size="lg"
                className="max-sm:hidden shrink-0"
              />
              <Input type="name" label="Name" color="default" />
            </div>
            <Input type="username" label="Username" />
            <Input type="email" label="Email" />
            <Input type="date" />
            <Input type="password" label="Password" />
          </div>
          <div className="flex gap-3 mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};
