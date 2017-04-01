const initialState = {
    musicData:[]
}

export default function (state = initialState, action) {
    const {type,musicData} = action
    switch (type) {
        case 'getMusicData':
            return {
                musicData
            }
    }
    return state;
}
