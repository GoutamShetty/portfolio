/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description resume buttons
 */

import { Button, message, Space } from "antd";

const ResumeButtons = () => {
  const handleDownload = async () => {
    void message.loading("Downloading Resume...");
    const url =
      "https://drive.google.com/uc?export=download&id=1T1Z2NV8kYRCzNlZuNg3qkh9kSNHfNly7";
    const link = document.createElement("a");
    link.href = url;
    link.download = "Goutam_Shetty_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Space wrap size="large">
      <Button
        className="effect"
        type="primary"
        size="large"
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1T1Z2NV8kYRCzNlZuNg3qkh9kSNHfNly7/view?usp=sharing"
      >
        View Resume
      </Button>
      <div className="trapdoor">
        <div className="top door"></div>
        <div className="bottom door"></div>
        <Button style={{ color: "#000" }} onClick={handleDownload}>
          Download Resume
        </Button>
      </div>
    </Space>
  );
};

export default ResumeButtons;
