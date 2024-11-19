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
        <div>
          Gained foundational knowledge in full-stack development through
          structured training sessions. The internship focused on understanding
          front-end and back-end technologies, along with industry best
          practices for building scalable web applications.
        </div>
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
        <p>
          At 314e Corporation, I contributed to developing an ATS + CRM product
          and an internal hospital communication interface, focusing on
          delivering high-quality, feature-rich applications. I implemented
          features such as a LinkedIn Chrome Extension, Insights, Dashboard,
          React Native App, Kanban Board, Richtext Editor, and Keycloak theme
          customization.
        </p>
        <p>
          My work involved using modern technologies like ReactJS, Tailwind CSS,
          Ant Design, ag-Grid, and Keycloak. I ensured quality through unit
          tests with Jest and end-to-end tests with Playwright. Additionally, I
          supported team members, participated in leadership discussions,
          conducted code reviews, and leveraged GitHub CI/CD for efficient
          deployments.
        </p>
      </>
    ),
  },
];

const Experience: React.FC = () => {
  return (
    <div id="experience" className="item padding-20-top-bottom">
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
