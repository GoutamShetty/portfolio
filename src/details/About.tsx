/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description About
 */

import React from "react";
import { Card, Space } from "antd";

const About: React.FC = () => {
  return (
    <div id="about" className="padding-20-top-bottom">
      <Card title="About" className="detail-card" hoverable>
        <Space direction="vertical">
          <>
            Greetings! I'm delighted to connect with you. I'm Goutam Shetty, a
            dedicated Frontend Developer with a strong academic background and a
            wealth of experience in technology, leadership and management.
          </>
          <>
            I'm passionate about continuous learning and strive to expand my
            skills and knowledge constantly. With a knack for clear and concise
            communication, I excel at collaborating with diverse teams to
            achieve common goals.
          </>
          <>Let's create something remarkable together!</>
        </Space>
      </Card>
    </div>
  );
};

export default About;
