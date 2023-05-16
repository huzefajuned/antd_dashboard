import React from "react";
import { Table, Button } from "antd";
import { ColumnsType } from "antd/es/table";
import data from "../../data.json";
import Map from "../Map/Map";

interface User {
  Serial_Number: number;
  Driver_Name: string;
  Truck_Number: string;
  Miles: number;
}
const allLoads: User[] = data;
  
const columns: ColumnsType<User> = [
  {
    title: "S.No",
    dataIndex: "Serial_Number",
    key: "Serial_Number",
    ellipsis: true,
  },
  {
    title: "Driver Name",
    dataIndex: "Driver_Name",
    key: "Driver_Name",
    ellipsis: true,
  },
  {
    title: "Truck No.",
    dataIndex: "Truck_Number",
    key: "Truck_Number",
    ellipsis: true,
  },
  {
    title: "Miles",
    dataIndex: "Miles",
    key: "Miles",
    ellipsis: true,
  },
  {
    title: "Action",
    key: "Action",
    ellipsis: true,
    render: () => <Button type="default">Assign</Button>,
  },
];
const ListLoads = () => {
  return (
    <div className=" mt-4 p-2 flex flex-row justify-center">
      <Table
        className="w-6/12 p-0 border border-1 border-#D4D4D4-400  rounded"
        dataSource={allLoads}
        columns={columns}
        pagination={{
          pageSize: 8,
          showQuickJumper: false,
          showSizeChanger: false,
        }}
      />

      <div className="w-5/12 ml-5 max-h-full  border border-1 border-#D4D4D4-400 rounded ">
        <Map />
      </div>
    </div>
  );
};

export default ListLoads;
