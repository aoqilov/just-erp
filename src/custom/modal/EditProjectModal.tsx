import React from "react";
import Modal, { ModalProps } from "antd/es/modal";
import { FaCheck } from "react-icons/fa";
import CustomButton from "../buttons/CustomButton";
import FieldDataPicker from "../inputs/FieldDataPicker";
import FieldOne from "../inputs/FieldOne";
import FieldSelect from "../inputs/FieldSelect";
import FieldTextarea from "../inputs/FieldTextarea";

interface CustomModalProps extends ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

const EditProjectModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  title,
  ...props
}) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      {...props}
      className="custom-modal"
    >
      <div className="modal-header">
        <div className="header-title">
          <h3>{title}</h3>
          <p>{title} and save</p>
        </div>
      </div>
      <div className="modal-content">
        <div className="content-inputs">
          <label>
            Change deadline
            <FieldDataPicker />
          </label>
          <label>
            Change name
            <FieldOne />
          </label>
          <label>
            Change status
            <FieldSelect />
          </label>
        </div>
        {/* ///////////////////// */}
        <div className="box-textarea">
          <p style={{ marginTop: "20px" }}>Comments</p>
          <FieldTextarea />
        </div>
      </div>
      <div className="modal-footer">
        <CustomButton type="default" onClick={onClose} className="footer-btn">
          Close
        </CustomButton>
        <CustomButton
          icon={<FaCheck />}
          iconPosition="end"
          type="primary"
          onClick={onClose}
          className="footer-btn"
        >
          Save
        </CustomButton>
      </div>
    </Modal>
  );
};

export default EditProjectModal;

// import React, { useState } from "react";
// import { Button } from "antd";
// import CustomModal from "./components/CustomModal"; // Modalni import qilish

// const App: React.FC = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const showModal = () => {
//     setModalVisible(true);
//   };

//   const hideModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <div style={{ padding: "50px" }}>
//       <Button type="primary" onClick={showModal}>
//         Open Custom Modal
//       </Button>
//       <CustomModal
//         visible={modalVisible}
//         onClose={hideModal}
//         title="Custom Modal Title"
//         content={<p>This is a custom modal content.</p>}
//       />
//     </div>
//   );
// };

// export default App;
