import {createSlice} from '@reduxjs/toolkit';

const tokenSlice  = createSlice({
    name: 'token',
    initialState:{
        token:"",
    },
    reducers:{
        setAccessToken(state, actions){
            state.token = actions.payload;
        }
    }
});

export const {setAccessToken} = tokenSlice.actions;

export default tokenSlice.reducer;