import React from "react";
import { Typography } from "antd";
import { StarOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;

const ActiveLoadsHeader = () => {
  return (
    <div className=" h-36 w-11/12 m-auto  flex flex-col justify-center">
      <div className=" flex flex-row mt-10">
        <Title className="tracking-wider" style={{ fontWeight: "280" }}>
          Active Loads
        </Title>
        <StarOutlined
          className=" w-20 h-12 text-3xl"
          style={{ fontSize: "34px", color: "black", transform: "scale(1.0)" }}
        />
      </div>

      <div className="text">
        <span className="ml-0"> Dashboard </span> |{" "}
        <span className="ml-2"> Load Management </span>|
        <span className="ml-2"> Artive Loads </span> |
        <Text style={{ color: "blue", cursor: "pointer", marginLeft: "10px" }}>
          Assign Driver
        </Text>
      </div>
    </div>
  );
};

export default ActiveLoadsHeader;
