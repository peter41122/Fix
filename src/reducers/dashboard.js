// ** Initial State
const initialState = {
    data : {},
}

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, data : action.payload }
            
        default:
            return { ...state }
    }
}
export default dashboard
  