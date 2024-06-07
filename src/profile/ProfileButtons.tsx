/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description personal Buttons
 */

import { Button, Space, Typography } from "antd";

import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import LinkedIn from "../icons/LinkedIn";
import Mail from "../icons/Mail";

const ProfileButtons: React.FC = () => {
  return (
    <Space
      className="full-width profile-button-container"
      style={{ paddingBottom: "20px" }}
      align="center"
      direction="vertical"
    >
      <Space size="large" className="profile-button-wrapper" align="center">
        <Button
          type="text"
          className="raise"
          target="__blank"
          href="mailto:goutam.shetty1@gmail.com"
          icon={<Mail />}
        />
        <Button
          type="text"
          className="raise"
          target="__blank"
          href="https://www.instagram.com/goutam_shetty/"
          icon={<Instagram />}
        />
        <Button
          type="text"
          className="raise"
          target="__blank"
          href="https://www.linkedin.com/in/goutam-shetty-262919219/"
          icon={<LinkedIn />}
        />
        <Button
          type="text"
          className="raise github-btn"
          target="__blank"
          href="https://github.com/GoutamShetty"
          icon={<Github />}
        />
      </Space>
      <Typography.Text style={{ color: "#F5F5DC" }}>
        Copyright © 2024 | Goutam Shetty
      </Typography.Text>
    </Space>
  );
};

export default ProfileButtons;
