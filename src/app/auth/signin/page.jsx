import SignInForm from "@/component/SignInForm";

const SignInPage = () => {
  return (
    <div>
      <h2 className="text-4xl font-extralight py-5 text-center underline">
        Sign In
      </h2>
      <div className="flex justify-center my-10">
        <SignInForm></SignInForm>
      </div>
    </div>
  );
};

export default SignInPage;
