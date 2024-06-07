/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Education
 */

import React from "react";
import {
  Button,
  Card,
  Progress,
  Space,
  Steps,
  Timeline,
  Typography,
} from "antd";

import CircleRightUp from "../icons/CircleRightUP";

const items = [
  {
    color: "green",
    label: "July 2016 - Mar 2018",
    children: (
      <>
        <Typography.Title level={4} style={{ marginTop: 0 }}>
          <Space size={1}>
            <>Jawahar Navodaya Vidyalaya, North Canara</>
            <Button
              type="text"
              target="__blank"
              href="https://navodaya.gov.in/nvs/nvs-school/Uttarakannada/en/about_us/About-JNV/"
              icon={<CircleRightUp />}
            />
          </Space>
        </Typography.Title>
        <Space direction="vertical">
          <>Higher Secondary Education</>
          <>PCMB</>
          <Progress
            percent={87}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
          />
        </Space>
      </>
    ),
  },
  {
    color: "green",
    label: "July 2018 - May 2022",
    children: (
      <>
        <Typography.Title level={4} style={{ marginTop: 0 }}>
          <Space size={1}>
            <>CMR Institute of Technology, Bengaluru</>
            <Button
              type="text"
              target="__blank"
              href="https://www.cmrit.ac.in/"
              icon={<CircleRightUp />}
            />
          </Space>
        </Typography.Title>
        <Space direction="vertical">
          <>Bachelor of Technology (B.Tech)</>
          <>Information Science and Engineering</>
          <Progress
            percent={88}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
            format={() => `8.8 CGPA`}
          />
        </Space>
      </>
    ),
  },
];

const Education: React.FC = () => {
  return (
    <div id="education" className="padding-20-top-bottom">
      <Card
        id="education"
        title="Education"
        className="timeline-card detail-card"
        hoverable
      >
        <Timeline mode="left" items={items} />
      </Card>
    </div>
  );
};

export default Education;
