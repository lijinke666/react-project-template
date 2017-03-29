import helper from "libs/helper"
const { host, port } = helper;

const initialState = {
    musicData:[]
}

export default async function (state = initialState, action) {
    switch (action.type) {
        case 'getMusicData':
            const data = await helper.postJson(`${host}:${port}/music`);
            console.log('data',data);
            return {
                musicData : data
            }
    }
    return state;
}
