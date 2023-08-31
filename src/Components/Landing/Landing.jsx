import { Logo } from "../icons/logo";
import { Button } from "@nextui-org/react";

const Landing = () => {
  return (
    <div className="flex min-h-screen lg:items-center max-lg:mx-14 max-lg:flex-col">
      <Logo
        classes={
          "lg:basis-1/2 my-5 mt-10 max-lg:basis-1/6 max-lg:h-52 max-lg:mb-14 lg:h-80"
        }
      />
      <div className="flex flex-col lg:basis-1/2 items-start max-lg:basis-5/6">
        <p className="font-black text-5xl mb-14">Share your thoughts</p>
        <p className="font-black text-3xl mb-7">Join today.</p>
        <Button color="primary" className="font-semibold w-1/2 max-sm:w-full">
          Create account
        </Button>
        <div className="w-1/2 max-sm:w-full flex my-2 items-center">
          <div className="basis-[47.5%] bg-default-200 h-px inline-block"></div>
          <p className="inline mx-1 basis-[5%] text-center">or</p>
          <div className="basis-[47.5%] bg-default-200 h-px inline-block"></div>
        </div>
        <p className="max-sm:w-full w-1/2 font-bold text-center">
          Already have an account?
        </p>
        <Button
          className="max-sm:w-full w-1/2 font-semibold my-3"
          variant="ghost"
          color="primary"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Landing;
