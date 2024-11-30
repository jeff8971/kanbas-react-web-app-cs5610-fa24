import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const initialState = {
    assignments: initialAssignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            state.assignments.push(assignment);
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== assignmentId
            );
        },

        updateAssignment: (state, { payload: assignment }) => {
            const index = state.assignments.findIndex(
                (a) => a._id === assignment._id
            );
            if (index !== -1) {
                state.assignments[index] = assignment;
            }
        },

        setAssignments: (state, { payload: assignments }) => {
            state.assignments = assignments;
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignments,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
