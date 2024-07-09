import React from "react";
import MessageSuccess from "./MessageSuccess";
import Receipt from "./Receipt";

const Desktop = () => {
  return (
    <div className="py-16 mx-auto flex flex-col gap-20">
      {/* Success Message */}
      <div>
        <MessageSuccess />
      </div>

      <div className="bg-[#F1F1F1] py-10 px-14">
        <Receipt />
      </div>
    </div>
  );
};

export default Desktop;
