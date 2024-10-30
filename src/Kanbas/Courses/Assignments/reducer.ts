import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState: { assignments: initialAssignments },
    reducers: {
        addAssignment: (state, { payload }) => {
            state.assignments.push(payload);
        },
        deleteAssignment: (state, { payload }) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== payload
            );
        },
        updateAssignment: (state, { payload }) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === payload._id ? payload : assignment
            );
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
