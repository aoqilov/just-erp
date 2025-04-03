import React from "react";
import TextArea from "antd/es/input/TextArea";

const FieldTextarea: React.FC = () => (
  <TextArea
    showCount
    maxLength={100}
    // onChange={onChange}
    placeholder="disable resize"
    style={{ height: 120, resize: "none" }}
  />
);

export default FieldTextarea;
