/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description projects
 */

import React from "react";
import { Card, List, Space, Tag } from "antd";

const data = [
  {
    title: "GitTogether",
    description: `Built a full-stack social platform for developers with real-time chat, authentication, payments (Razorpay), and email notifications (Cron + AWS SES). Frontend in React and TypeScript; backend in Node.js/Express with MongoDB, JWT, and Socket.io. Deployed on AWS (EC2, S3) behind Nginx with Cloudflare for scale and reliability.`,
    href: "https://gittogether.shop",
    tools: [
      "React",
      "MongoDB",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built using React. The website showcases my projects, experience, and education.",
    href: "https://github.com/GoutamShetty/portfolio",
    tools: ["React", "CSS", "JavaScript", "Ant Design", "TypeScript"],
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="item padding-20-top-bottom project">
      <Card title="Projects" className="detail-card" hoverable>
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <a target="__blank" href={item.href}>
                    {item.title}
                  </a>
                }
                description={item.description}
              />
              <Space wrap>
                {item.tools.map((tool) => (
                  <Tag color="purple" key={tool}>
                    {tool}
                  </Tag>
                ))}
              </Space>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Projects;
