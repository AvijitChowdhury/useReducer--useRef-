
export const patientState ={
    patients : []
}

export const patientReducer = (state,action)=>{
    switch (action.type){
        case 'ADD_PATIENT':
            const newPatient={
                id :action.id,
                name: action.name,
            }
            const allPatients = [...state.patients , newPatient];
            return {patients:allPatients};
        case 'REMOVE_PATIENT':
            const remainingPatient = state.patients.filter(patient=>patient.id !== action.id);
            const newState = {patients:remainingPatient};
            return newState;
        default:
            return state;    
    }
}