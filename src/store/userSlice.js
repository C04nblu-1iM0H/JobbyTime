import {createSlice} from '@reduxjs/toolkit';

const userSlice  = createSlice({
    name: 'user',
    initialState:{
        userData: {
            firstName: "",
            lastName: "",
            countryCode: "",
            phoneNumber: "",
            birthday: "",
            selectedCountry: "",
            state: "",
            city: "",
            postal: "",
            email:"",
            LocationCheckUSA:null,
            WorkAuthorizationQuestion:null,
            selectedTimeZone:null,
            securityClearance:null,
            levelOfClearance:null,
        }
    },
    reducers:{
        setUserData(state, action) {
            const { data, value } = action.payload;
            state.userData[data] = value;
        },
    }
});

export const {setUserData} = userSlice.actions;

export default userSlice.reducer;