import { Row, Col } from "antd";
import Link from "next/link";
import { CodeOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <Row align="middle" sytle={{ height: 64 }}>
      <Col span={24}>
        <Link href="/">
          <div
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            <CodeOutlined />
            Mark's Blog
          </div>
        </Link>
      </Col>
    </Row>
  );
}
