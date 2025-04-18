import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

const TimelineContent = (props) => {
  return (
    <CardContainer className="flex flex-col items-end justify-end h-full w-full relative ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-primary transition-all duration-300 dark:bg-[#101010] dark:border-dark border-dark w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
        <div className="flex justify-end items-end mt-5">
          <CardItem
            translateZ={20}
            translateX={-10}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:scale-125 hover:opacity-90 "
          >
            <a href={props.link} target="_blank">
              Try now →
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default TimelineContent;
