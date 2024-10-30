import React from "react";
import { BsPlus } from "react-icons/bs";
import { FaTrash, FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

interface ModuleControlButtonsProps {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: ModuleControlButtonsProps) {
  return (
    <div className="float-end">
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary me-3"
        style={{ cursor: "pointer" }}
      />
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteModule(moduleId)}
        style={{ cursor: "pointer" }}
      />
      <GreenCheckmark />
      <BsPlus className="fs-4" />
    </div>
  );
}
