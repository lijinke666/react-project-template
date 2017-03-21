const initialState = initialState

export default function(state = initialState,action) {
    switch (action.type){
        case ACTION:
            return action.payload
    }
    return state;
}
