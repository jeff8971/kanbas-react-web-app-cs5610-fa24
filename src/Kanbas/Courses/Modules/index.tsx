import { useState, useEffect } from "react";
import * as client from "./client";
import { BsGripVertical } from "react-icons/bs";
import "../../styles.css";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

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
  editing?: boolean;
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState<string>("");
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
    };
    useEffect(() => {
    fetchModules();
  }, []);

  const handleAddModule = () => {
    if (moduleName.trim()) {
      dispatch(addModule({ name: moduleName, course: cid }));
      setModuleName("");
    }
  };

  const handleDeleteModule = (moduleId: string) => {
    dispatch(deleteModule(moduleId));
  };

  const handleEditModule = (moduleId: string) => {
    dispatch(editModule(moduleId));
  };

  const handleUpdateModule = (module: Module) => {
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div style={{ textAlign: "left" }}>
      {/* Render ModulesControls only for FACULTY */}
      {currentUser.role === "FACULTY" && (
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={() => {
            createModule({ name: moduleName, course: cid });
            setModuleName("");
          }} />
      )}

      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: Module) => module.course === cid)
          .map((module: Module, index: number) => (
            <li key={index} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                                {module.editing && (
                                    <input className="form-control w-50 d-inline-block"
                                        onChange={(e) =>
                                            dispatch(
                                                updateModule({ ...module, name: e.target.value })
                                            )
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                saveModule({ ...module, editing: false });
                                            }
                                        }}
                                        value={module.name} />
                                )}
                
                {/* Show ModuleControlButtons only for FACULTY */}
                {currentUser.role === "FACULTY" && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => { removeModule(moduleId); }}
                    editModule={handleEditModule}
                  />
                )}
              </div>

              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: Lesson, idx: number) => (
                    <li key={idx} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}

                      {/* Show LessonControlButtons only for FACULTY */}
                      {currentUser.role === "FACULTY" && <LessonControlButtons />}
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
