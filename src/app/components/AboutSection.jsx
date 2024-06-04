"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc grid grid-cols-2  pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>NextJs</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Redux</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Vietnam Australia Vocational College</li>
        <li>Front End 2022-2023</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>2023 Intership - Company Bixso Front-end developer</li>
        <li>2023 - 2024 Freelancer</li>
      </ul>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="image" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Tôi là một nhà phát triển web front end với niềm đam mê sáng tạo
 các ứng dụng web tương tác và đáp ứng. tôi có kinh nghiệm
 làm việc với JavaScript, React, Nextjs, Redux, Node.js, Express, MongoDB, Firebase,
  HTML, CSS và Git. Tôi là người học nhanh và tôi luôn luôn
 đang tìm cách mở rộng kiến ​​thức và kỹ năng của mình.
 Tôi rất vui được làm việc với những người khác để tạo ra những ứng dụng tuyệt vời.
          </p>
          <div className="flex gap-5 flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Kỹ năng{" "}
            </TabButton>
          <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Kinh nghiệm{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Giáo dục{" "}
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
