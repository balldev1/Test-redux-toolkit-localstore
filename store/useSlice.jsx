import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Formdata: {
        firstname: [],
        phone: [],
        date: [],
        time: []
    }
};

export const useSlice = createSlice({
    name: 'useStore',
    initialState: initialState,
    reducers: {
        loadData: (state, action) => {
            const storedData = localStorage.getItem('useStore');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                state.Formdata = parsedData?.Formdata || [];
            }
        },
        createData: (state, action) => {
            const { firstname, phone, date, time } = action.payload;
            state.Formdata.firstname = [...state.Formdata.firstname, firstname];
            state.Formdata.phone = [...state.Formdata.phone, phone];
            state.Formdata.date = [...state.Formdata.date, date];
            state.Formdata.time = [...state.Formdata.time, time];
            localStorage.setItem('useStore', JSON.stringify(state));

        },
        deleteData: (state) => {
            state.Formdata.firstname = [];
            state.Formdata.phone = [];
            state.Formdata.date = [];
            state.Formdata.time = [];
            localStorage.removeItem('useStore');
        },
    },
});

export const { createData, loadData, deleteData } = useSlice.actions;

export default useSlice.reducer;
