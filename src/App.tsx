/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description APP
 */

import { Col, ConfigProvider, Row } from "antd";

import "./App.css";
import GradientDiv from "./background/GradientDiv";
import Profile from "./profile/Profile";
import Logo from "./background/Logo";
import Details from "./details/Details";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5783db",
          colorText: "#fff",
          colorTextDescription: "#fff",
        },
        components: {
          Card: {
            colorBgContainer: "#001233",
            fontSize: 16,
          },
          Timeline: {
            tailColor: "#fff",
            colorTextDescription: "#fff",
            fontSize: 16,
          },
          Progress: {
            remainingColor: "#fff",
          },
        },
      }}
    >
      <GradientDiv className="app">
        <Logo />
        <Row className="app-wrapper">
          <Col
            className="app-col-1"
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
          >
            <Profile />
          </Col>
          <Col
            id="details"
            className="app-col-2"
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
          >
            <Details />
          </Col>
        </Row>
      </GradientDiv>
    </ConfigProvider>
  );
};

export default App;
