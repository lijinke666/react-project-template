import helper from "libs/helper"
const { host, port } = helper;
const initialState = {
    musicData:[]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'getMusicData':
            let data = helper.postJson(`${host}:${port}/music`)
            console.log(data);
            return {
                musicData: [1]
            }
    }
    return state;
}
