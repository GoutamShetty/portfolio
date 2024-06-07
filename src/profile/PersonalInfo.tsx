/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description personal info
 */

import { Avatar, Space, Typography } from "antd";

import profilePic from "../img/profilePic.jpg";

const PersonalInfo: React.FC = () => {
  return (
    <Space>
      <Avatar src={<img src={profilePic} alt="profile" />} size={180} />
      <div>
        <Typography.Title level={2}>Goutam Shetty</Typography.Title>
        <Typography.Title level={4}>Software Engineer</Typography.Title>
      </div>
    </Space>
  );
};

export default PersonalInfo;
