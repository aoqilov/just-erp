import ButtonAdd from "@/custom/buttons/buttonAdd";
import FieldOne from "@/custom/inputs/FieldOne";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const ProjectsPage = () => {
  return (
    <div>
      <ButtonAdd icon={<FaPlus color="white" />} type="primary">
        Submit
      </ButtonAdd>
      <ButtonAdd type="default">Cancel</ButtonAdd>
      <ButtonAdd danger type="primary">
        Dashed
      </ButtonAdd>

      <FieldOne label="input fasd" placeholder="yozaqo" />
    </div>
  );
};

export default ProjectsPage;
