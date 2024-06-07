/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description projects
 */

import React from "react";
import { Card, List, Space, Tag } from "antd";

const data = [
  {
    title: "Zomato Clone",
    description:
      "A clone of the Zomato website, built using React. The app allows users to search for restaurants, view their details, and add items to the cart.",
    href: "",
    tools: ["React", "MongoDB", "CSS", "JavaScript"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built using React. The website showcases my projects, experience, and education.",
    href: "",
    tools: ["React", "CSS", "JavaScript", "Ant Design", "TypeScript"],
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="padding-20-top-bottom project">
      <Card title="Projects" className="detail-card" hoverable>
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
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
