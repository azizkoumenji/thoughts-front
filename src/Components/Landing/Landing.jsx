import { Logo } from "../Icons/Logo";
import { Button } from "@nextui-org/react";

const Landing = () => {
  return (
    <div className="flex min-h-screen items-center">
      <Logo height={"300"} classes={"basis-1/2 mx-5"} />
      <div className="flex flex-col basis-1/2 items-start">
        <p className="font-black text-5xl mb-14">Share your thoughts</p>
        <p className="font-black text-3xl mb-7">Join today.</p>
        <Button color="primary" className="font-semibold w-1/2">
          Create account
        </Button>
        <div className="w-1/2 flex my-2 items-center">
          <div className="basis-[47.5%] bg-default-200 h-px inline-block"></div>
          <p className="inline mx-1 basis-[5%] text-center">or</p>
          <div className="basis-[47.5%] bg-default-200 h-px inline-block"></div>
        </div>
        <p className="w-1/2 font-bold text-center">Already have an account?</p>
        <Button
          className="w-1/2 font-semibold my-3"
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
