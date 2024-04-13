"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);
const NationalCTFs = [
  {
    postfix: "nd",
    metric: "",
    value: "2",
    CTFname: "Engineers spark CTF 2024"
  },
  {
    postfix: "th",
    metric: "",
    value: "6",
    CTFname: "Hackfest Qualifications 2024",
    CTFnameNote: "(4th in tunisia)"
  },
  {
    postfix: "st",
    metric: "",
    value: "1",
    CTFname: "SecuriNets ISET Zaghouan 2024"
  },
];
const InternationalCTFs = [
  {
    postfix: "th",
    metric: "out of 738 teams",
    value: "30",
    CTFname: "Arab Security CWG 2023"
  },
  {
    postfix: "rd",
    metric: "out of 913 teams",
    value: "33",
    CTFname: "Amateurs CTF 2023"
  },
  {
    postfix: "th",
    metric: "out of 448 teams",
    value: "17",
    CTFname: "Arab Regional Cyber CTF 2023"
  },
  {
    postfix: "th",
    metric: "out of 5694 teams",
    value: "107",
    CTFname: "Cyber Apocalypse CTF 2024"
  },
];

export const AchievementsSectionNational = () => {
  return (
    
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"><h5 className=" flex flex-col items-center justify-center mx-4 my-4 sm:my-0 text-white text-4xl font-bold">National CTFs</h5><br/>
      <div className="md:border-[#00FFFF] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between ">
        {NationalCTFs.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row" >
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-base"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 100 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              <p className=" items-center justify-center text-[#00FFFF] text-1xl">{achievement.CTFname}</p>
              <p className=" items-center justify-center text-[#00FFFF] text-1xl">{achievement.CTFnameNote}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const AchievementsSectionInternational = () => {
  return (
    
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"><h5 className=" flex flex-col items-center justify-center mx-4 my-4 sm:my-0 text-white text-4xl font-bold">International CTFs</h5><br/>
      <div className="sm:border-[#00FFFF] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {InternationalCTFs.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row" >
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 100 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              <p className="text-[#00FFFF] text-base">{achievement.CTFname}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

