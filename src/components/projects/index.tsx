"use client";
import CustomButton from "@/custom/buttons/CustomButton";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import CardProject from "./CardProject";
import AddProjectModal from "@/custom/modal/AddProjectModal";
import EditProjectModal from "@/custom/modal/EditProjectModal";

const ProjectsLayout = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  function showEditModal() {
    setEditModalVisible(true);
  }
  function hideEditModal() {
    setEditModalVisible(false);
  }

  return (
    <div className="project">
      <div className="project__header">
        <div className="header-input">
          <input
            type="text"
            className="input"
            placeholder="Search for projects..."
          />
          <i>
            <IoIosSearch size={24} />
          </i>
        </div>
        <CustomButton
          style={{ borderRadius: "30px", height: "40px", width: "220px" }}
          type="default"
          icon={<FaPlus />}
          iconPosition="end"
          onClick={showModal}
        >
          Add project
        </CustomButton>
        <CustomButton
          style={{ borderRadius: "30px", height: "40px", width: "220px" }}
          type="default"
          icon={<FaPlus />}
          iconPosition="end"
          onClick={showEditModal}
        >
          Edit project
        </CustomButton>
      </div>
      <div className="project__cards">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
      <AddProjectModal
        open={modalVisible}
        onClose={hideModal}
        title="Add project"
      />
      <EditProjectModal
        open={editModalVisible}
        onClose={hideEditModal}
        title="Edit project"
      />
    </div>
  );
};

export default ProjectsLayout;
