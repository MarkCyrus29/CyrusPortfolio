import React from "react";
import { Lens } from "./lens";

const TimelineContent = (props) => {
  return (
    <div className="flex  flex-col items-center justify-center ">
      <Lens zoomFactor={3} lensSize={150}>
        <img
          className="cursor-zoom-in py-2 rounded-2xl"
          src={props.image}
          alt="Project Image"
        />
      </Lens>
      <p>{props.desc}</p>
    </div>
  );
};

export default TimelineContent;
