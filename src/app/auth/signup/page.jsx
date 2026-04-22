"use client";
import SignUpForm from "@/component/SignUpForm";

const SignUpPage = () => {

  return (
    <div>
      <h2 className="text-center font-extralight text-4xl py-5 underline">
        Sign Up
      </h2>
      {/* Form */}
      <div className="flex justify-center items-center px-3">
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
};

export default SignUpPage;
