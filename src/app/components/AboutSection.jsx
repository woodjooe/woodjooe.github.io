"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Professional Experience",
    id: "experience",
    content: (
<div>
<div class="w-full text-center bg-black rounded-lg shadow p-3 text-sm text-[#00CCCC] font-semibold">
  <ul className="list-disc pl-5">
    <li class="mb-2">Cyber Security Intern - Talan ( February - June | 2024 )</li>
    <p class="mb-1"> </p>
    </ul>
  </div>
  <br/>
    <div class="w-full text-center bg-black rounded-lg shadow p-3 text-sm text-[#00CCCC] font-semibold">
  <ul className="list-disc pl-5">

    <li class="mb-2">Cyber Security Intern - DefensyLab ( July - September | 2023 )</li>
    <p class="mb-1">Active Directory Penetration Testing </p>
  </ul>
  </div>
  <br/>
    <div class="w-full text-center bg-black rounded-lg shadow p-3 text-sm text-[#00CCCC] font-semibold">
  <ul className="list-disc pl-5">
    <li class="mb-2">Defensive Hacking Intern - Excelerate ( June - July | 2023 )</li>
    <p class="mb-1">Setting up a virtualization environment for threat assessments testing </p>
    </ul>
  </div>
  <br/>
    <div class="w-full text-center bg-black rounded-lg shadow p-3 text-sm text-[#00CCCC] font-semibold">
  <ul className="list-disc pl-5">
    <li class="mb-2">Cyber Security Intern - DefensyLab ( July - August | 2022 )</li>
    <p class="mb-1">Development of a CTF competition </p>
  </ul>
  </div>
</div>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
<div class="flex flex-wrap gap-4 text-[#00CCCC] font-semibold">

<div class="lg:w-40 h-40 bg-black rounded-lg shadow p-4 text-sm">
  <ul className="list-disc pl-4">
    <li class="mb-2">C / C++</li>
    <li class="mb-2">C#</li>
    <li class="mb-2">GoLang</li>
    <li class="mb-2">Java</li>
    <li class="mb-2">Win32 Assembly</li>
  </ul>
</div>

<div class="lg:w-40 h-40 bg-black rounded-lg shadow p-4 text-sm">
  <ul className="list-disc pl-4">
    <li class="mb-2">Django</li>
    <li class="mb-2">React</li>
    <li class="mb-2">Next</li>
    <li class="mb-2">SQL/noSQL</li>
    <li class="mb-2">PL/SQL</li>
  </ul>
</div>
<div class="lg:w-40 h-40 bg-black rounded-lg shadow p-4 text-sm">
  <ul className="list-disc pl-4">
    <li class="mb-8">Powershell</li>
    <li class="mb-8">Bash</li>
    <li class="mb-8">Python</li>
  </ul>
</div>

</div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
<div>
<div class="w-full text-center bg-black rounded-lg shadow p-3 text-sm text-[#00CCCC] font-semibold">
  <ul className="list-disc pl-5">
    <li class="mb-1">National Engineering School of Sfax - ENIS ( 2021-2024 )</li>
    <p class="mb-2">Computer Science and Applied Mathematics Engineering Degree </p>
    </ul>
  </div>
  <br/>
  <div class="w-full text-center bg-black rounded-lg shadow p-3 text-sm text-[#00CCCC] font-semibold">
  <ul className="list-disc pl-5">
    <li class="mb-1">Preparatory Institute for engineering Studies - IPEIT ( 2019-2021 )</li>
    <p class="mb-2">Physics / Chemistry Degree </p>
  </ul>
</div>
</div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
<div class="flex flex-wrap gap-4 text-[#00CCCC] underline font-semibold">

<div class="lg:w-40 bg-black rounded-lg shadow p-4 text-sm">
  <ul className="list-disc pl-2">
    <li class="mb-2"><a href="certs/AZ-900.png" target="_blank" rel="noopener noreferrer">AZ-900 </a></li>
    <br/>
    <li class="mb-2"><a href="certs/SC-900.png" target="_blank" rel="noopener noreferrer">SC-900 </a></li>
    <br/>
    <li class="mb-2">PCSE <br/>(in Progress)</li>
  </ul>
</div>
<div class="lg:w-40 bg-black rounded-lg shadow p-4 text-sm">
  <ul className="list-disc pl-2">
    <li class="mb-2"><a href="certs/CTC.png" target="_blank" rel="noopener noreferrer">CyberTalents SOC analyst</a></li>
    <li class="mb-2"><a href="certs/CTC.png" target="_blank" rel="noopener noreferrer">CyberTalents Threat Hunter</a></li>
    <li class="mb-2"><a href="certs/IBMCybersecurityAnalystProfessional.png" target="_blank" rel="noopener noreferrer">IBM Cybersecurity Analyst Professional</a></li>
  </ul>
</div>
<div class="lg:w-40 bg-black rounded-lg shadow p-4 text-sm">
  <ul className="list-disc pl-2">
    <li class="mb-2"><a href="https://app.hackthebox.com/profile/1332595"  target="_blank" rel="noopener noreferrer">Hacker on HTB</a></li>
    <br/>
    <li class="mb-2">CRTP <br/> (in Progress)</li>
  </ul>
</div>

</div>

    ),
  },
  {
    title: "Others",
    id: "others",
    content: (
<div>
<div class="w-full text-center bg-black rounded-lg shadow p-3 text-sm text-[#00CCCC] underline font-semibold">
  <ul className="list-disc pl-5">
    <li class="mb-2 "><a href="certs/SolLab.png" target="_blank" rel="noopener noreferrer">National Student Entrepreneur Status</a></li>
    <p class="mb-2"> </p>
    </ul>
  </div>
  <br/>
  <div class="w-full text-center bg-black rounded-lg shadow p-3 text-sm text-[#00CCCC] underline font-semibold">
  <ul className="list-disc pl-5">
    <li class="mb-2"><a href="certs/SolLab.png" target="_blank" rel="noopener noreferrer">Participation in Sol Lab</a></li>
    <p class="mb-2"></p>
    </ul>
  </div>
  <br/>
  <div class="w-full text-center bg-black rounded-lg shadow p-3 text-sm text-[#00CCCC] underline font-semibold">
  <ul className="list-disc pl-5">
      <li class="mb-2"><a href="https://www.facebook.com/Securinets.enis" target="_blank" rel="noopener noreferrer">Founder / ExPresident of a Cyber Security university Club</a></li>
    <p class="mb-2"></p>
  </ul>
</div>
</div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about" height="1000px">
      <div className="md:grid md:grid-cols-2 gap-20 items-center py-8 px rounded-full ">
        <Image className ="rounded-md h-100 w-100 mr-2 border-2 relative  border-[#00AAAA]" src="/bg-gif.gif" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-[650px]" >
          <h2 className="text-4xl font-bold text-[#00AAAA] mb-4">About Me</h2>
          <p className=" lg:text-1lg">
            I am a computer sciences engineering student currently enrolled at ENIS.
            I&apos;m interested in both offensive and defensive security.
            
            But I&apos;m mostly interested red teaming activities and malware development.
            <br/>
            <br/>
            I&apos;m also interested in cloud technologies and am currently going through
            the google professional cloud security engineer course provided by google.
          </p>
          <div className="text-[#00FFFF] flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Professional Experience{" "}
            </TabButton>            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Programming Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("others")}
              active={tab === "others"}
            >
              {" "}
              <p>Others</p>{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
