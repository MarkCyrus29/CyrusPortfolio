import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

const TimelineContent = (props) => {
  return (
    // <div className="flex flex-col items-center justify-center h-full w-full relative mt-5 hover:scale-[1.5] transition-all translate-3d">

    //   <video
    //     loop
    //     autoPlay
    //     playsInline
    //     muted
    //     className="w-full h-full object-contain -z-10 rounded-lg"
    //     src={props.src}
    //   />

    //   <p>{props.desc}</p>
    // </div>
    <CardContainer className="flex flex-col items-center justify-center h-full w-full relative ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-primary dark:bg-bg dark:border-white/[0.2] border-gray w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.desc}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={0}
          rotateZ={0}
          className="w-full mt-4"
        >
          <video
            lazy
            loop
            autoPlay
            playsInline
            muted
            className="w-full h-full object-contain -z-10 rounded-lg"
            src={props.src}
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.techs}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default TimelineContent;
