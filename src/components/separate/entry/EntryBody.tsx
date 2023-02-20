import React from "react";
import EntryDescription from "./EntryDescription";
import LoginForm from "./LoginForm";

const EntryBody = () => {
  return (
    <div className="h-screen">
      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col w-11/12 mx-auto xl:items-center lg:items-center xl:h-full lg:h-full md:h-full sm:h-auto xs:h-auto xxs:h-auto">
        <EntryDescription></EntryDescription>
        <div className="h-10 xl:hidden lg:hidden md:block sm:block xs:block xxs:block"></div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default EntryBody;
