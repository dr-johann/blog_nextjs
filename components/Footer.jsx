import { Col, Row } from "antd";

export default function Footer() {
  return (
    <Row
      align="middle"
      style={{
        height: 50,
        textAlign: "Right",
      }}
    >
      <Col span={24}>
        <p> 2021 Mark Lee. All rights reserved.</p>
      </Col>
    </Row>
  );
}
