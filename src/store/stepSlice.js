import {createSlice} from '@reduxjs/toolkit';

const stepSlice  = createSlice({
    name: 'step',
    initialState:{
        done:{
            stepDone1:false,
            stepDone2:false,
            stepDone3:false
        },
        steps:{
            step0:false,
            step1:false,
            step2:false,
            step3:false,
            step4:false
        },
        state_onbording:"",
        loading:false,
        isVerificationOfPayment: false,
        freeplan: false,
    },
    reducers:{
        setDoneStep(state, action) {
            const { step, value } = action.payload;
            if (state.done.hasOwnProperty(step)) {
                state.done[step] = value;
            }
        },
        setSteps(state, action){
            const { step, value } = action.payload;
            if (state.steps.hasOwnProperty(step)) {
                state.steps[step] = value;
            }
        },
        setStateOnboard(state, action){
            state.state_onbording = action.payload;
        },

        setLoading(state, action){
            state.loading = action.payload; 
        },
        setIsVerificationOfPayment(state, action){
            state.isVerificationOfPayment = action.payload; 
        },
        setFreePlan(state, action){
            state.freeplan = action.payload; 
        },
    }
});

export const {setStateOnboard, setDoneStep, setSteps, setLoading, setIsVerificationOfPayment, setFreePlan } = stepSlice.actions;

export default stepSlice.reducer;