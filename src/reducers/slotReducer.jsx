const initialState = { 
    myJson: []
};

export const jsonDataAction = () => {
    return {
        type: "jsonDataType"
    }
}

export const jsonAddAction = (data) => {
    return {
        type: "jsonAddDateType",
        payload: data
    }
}

export default(state = initialState, action) => {
    switch (action.type) {
        case "DATA_RECEIVED": return jsonDataFunction(state, action);
        default: return state;
    }
}

const jsonDataFunction = (state, action) => {
   
    return {
        ...state,
        myJson: action.data.marked
    }
}