/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Experience
 */

import React from "react";
import { Button, Card, Timeline, Typography } from "antd";

const items = [
  {
    color: "green",
    children: (
      <>
        <Typography.Text strong>Jan 2022 - July 2022</Typography.Text>
        <Typography.Title level={4}>Software Analyst Trainee</Typography.Title>
        <div>
          <Button
            type="link"
            target="__blank"
            href="https://www.cognizant.com/in/en"
          >
            Cognizant -&gt;
          </Button>
        </div>
        <>
          Gained first hand experience in Python programming, SQL database
          management, and FastAPI framework after successfully completing
          coursework and hands-on projects. Developed RESTful APIs for
          performing basic CRUD operations using the FastAPI framework. Python
          SQL C
        </>
      </>
    ),
  },
  {
    children: (
      <>
        <Typography.Text strong>Aug 2022 - Present</Typography.Text>
        <Typography.Title level={4}>Software Developer</Typography.Title>
        <div>
          <Button type="link" target="__blank" href="https://www.314e.com/">
            314e Corporation -&gt;
          </Button>
        </div>
        <>
          Gained first hand experience in Python programming, SQL database
          management, and FastAPI framework after successfully completing
          coursework and hands-on projects. Developed RESTful APIs for
          performing basic CRUD operations using the FastAPI framework. Python
          SQL C
        </>
      </>
    ),
  },
];

const Experience: React.FC = () => {
  return (
    <div id="experience" className="padding-20-top-bottom">
      <Card
        id="experience"
        title="Experience"
        className="timeline-card detail-card"
        hoverable
      >
        <Timeline mode="left" items={items} />
      </Card>
    </div>
  );
};

export default Experience;
