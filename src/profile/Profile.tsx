/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description profile
 */

import React from "react";
import Typed from "react-typed";
import { Anchor, Divider, Flex, Space, Typography } from "antd";

import PersonalInfo from "./PersonalInfo";
import ProfileButtons from "./ProfileButtons";
import ResumeButtons from "./ResumeButtons";

const getTitle = (title: string) => {
  return (
    <Divider
      orientation="left"
      orientationMargin="0"
      style={{ margin: "0px", borderColor: "#fff" }}
    >
      <Typography.Text strong style={{ fontSize: "20px" }}>
        {title}
      </Typography.Text>
    </Divider>
  );
};

const strings = [
  "A curious individual with a knack for crafting compelling experiences__",
  "Driven by a passion for creating: from code to visuals, I bring ideas to life__",
  "My superpower? Transforming ideas into dazzling digital experiences__",
];

const items = [
  {
    key: "about",
    href: "#about",
    title: getTitle("About"),
  },
  {
    key: "experience",
    href: "#experience",
    title: getTitle("Experience"),
  },
  {
    key: "projects",
    href: "#projects",
    title: getTitle("Projects"),
  },
  {
    key: "education",
    href: "#education",
    title: getTitle("Education"),
  },
];

const Profile: React.FC = () => {
  return (
    <Flex vertical className="full-height" justify="space-between">
      <Space className="padding-20-top-bottom full-width" direction="vertical">
        <PersonalInfo />
        <div className="typed">
          <Typed
            className="profile"
            strings={strings}
            startDelay={300}
            typeSpeed={40}
            backSpeed={60}
            backDelay={400}
            showCursor
            cursorChar="!"
            loop
            smartBackspace
          />
        </div>
        <ResumeButtons />
        <Anchor
          className="profile-anchor"
          style={{ marginTop: "20px" }}
          affix={false}
          offsetTop={24}
          getContainer={() => document.getElementById("details") as HTMLElement}
          items={items}
        />
      </Space>
      <ProfileButtons />
    </Flex>
  );
};

export default Profile;
