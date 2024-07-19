import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MessageState {
    message: string;
}

const initialState: MessageState = {
    message: '',
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
});

export const { setMessage } = messageSlice.actions;

const store = configureStore({
    reducer: {
        message: messageSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
