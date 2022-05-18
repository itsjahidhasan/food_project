import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
export default function UserAdress({ text }) {
  console.log(text);
  return (
    <div className="user">
      <div className="">
        {/* <p id="add">11 road no. 16</p>
                 <p id ='add'>Note flat no 4B</p> */}
        <p id="add">{text}</p>
      </div>
      <div>
        <EditOutlined style={{ fontSize: "21px" }} />
        <DeleteOutlined style={{ fontSize: "21px", marginLeft: "20px" }} />
      </div>
    </div>
  );
}
