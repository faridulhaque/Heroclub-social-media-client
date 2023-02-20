import React from "react";
import entryImage from "../../../assets/entryPage.png"
const EntryDescription = () => {
  return (
    <>
      <div className="text-center xl:text-left lg:text-left xl:w-2/4 lg:w-2/4 md:w-full sm:w-full xs:w-full">
        <img src={entryImage} alt="vector_group_of_people" className="w-11/12 mx-auto"/>
        <p className="text-3xl">Connect with the world around you with <span className="text-4xl text-secondary">HeroClub</span></p>
      </div>
    </>
  );
};

export default EntryDescription;
