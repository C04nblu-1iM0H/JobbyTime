import {createSlice} from '@reduxjs/toolkit';

const stepSlice  = createSlice({
    name: 'step',
    initialState:{
        done:{
            stepDone1:false,
            stepDone2:false,
            stepDone3:false
        },
        current:{
            currentStep1:false,
            currentStep2:false,
            currentStep3:false
        },
        steps:{
            step1:false,
            step2:false,
            step3:false,
            step4:false
        },
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
        setCurrentStep(state, action) {
            const { step, value } = action.payload;
            if (state.current.hasOwnProperty(step)) {
                state.current[step] = value;
            }
        },
        setSteps(state, action){
            const { step, value } = action.payload;
            if (state.steps.hasOwnProperty(step)) {
                state.steps[step] = value;
            }
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

export const {setDoneStep, setCurrentStep, setLoading, setSteps, setIsVerificationOfPayment, setFreePlan } = stepSlice.actions;

export default stepSlice.reducer;