import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { assignments } from "../../Database";
import DeleteWindow from "./deleteWindow";
import { useDispatch } from "react-redux";
export default function AssControlButtons(){
    return (
        <div className="float-end">     
            <GreenCheckmark />
        </div>
    );
}