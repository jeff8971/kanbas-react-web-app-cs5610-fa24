import React, { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import "../../styles.css";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import * as db from "../../Database";
import { useParams } from "react-router";

// Define types for Module and Lesson
interface Lesson {
  _id: string;
  name: string;
  description: string;
}

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
  editing?: boolean; // Optional field for edit mode
}

export default function Modules() {
  const { cid } = useParams(); // Get the course ID from the URL parameters
  const [modules, setModules] = useState<Module[]>(
    db.modules.filter((module) => module.course === cid) as Module[]
  );
  const [moduleName, setModuleName] = useState<string>("");

  const addModule = () => {
    if (moduleName.trim()) {
      setModules([
        ...modules,
        {
          _id: new Date().getTime().toString(),
          name: moduleName,
          description: "",
          course: cid || "",
          lessons: [],
        },
      ]);
      setModuleName(""); // Clear the input after adding
    }
  };

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };

  const editModule = (moduleId: string) => {
    setModules(
      modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      )
    );
  };

  const updateModule = (module: Module) => {
    setModules(
      modules.map((m) =>
        m._id === module._id ? { ...module, editing: false } : m
      )
    );
  };

  return (
    <div style={{ textAlign: "left" }}>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
      <br />
      <br />
      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module: Module, index: number) => (
            <li key={index} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                
                {!module.editing && module.name} {/* Show module name if not editing */}

                {module.editing && ( // Render input field if editing is true
                  <input
                    className="form-control w-50 d-inline-block"
                    defaultValue={module.name}
                    onChange={(e) =>
                      updateModule({ ...module, name: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        updateModule({ ...module, editing: false });
                      }
                    }}
                  />
                )}
                
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={deleteModule}
                  editModule={editModule}
                />
              </div>
              
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: Lesson, idx: number) => (
                    <li key={idx} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name} {/* Render each lesson name */}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
