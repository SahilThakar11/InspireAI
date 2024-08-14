import React from "react";
import ReturnHeader from "../components/ReturnHeader";
import ImageSearch from "../components/ImageSearch";
import CommunityOptions from "../components/CommunityOptions";
import ImageLibrary from "../components/ImageLibrary";

const Community = () => {
  return (
    <div>
      <ReturnHeader />
      <div className="mt-[7rem]">
        <ImageSearch />
        <CommunityOptions />
        <ImageLibrary />
      </div>
    </div>
  );
};

export default Community;
