import  {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {postService} from "../services";

export const getPosts=createAsyncThunk(
    'posts/getPosts',
    async function (_,{rejectWithValue}){
        try {
            const response=await postService.getAll();
            console.log(response);
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            return response;
        } catch (error){
            return rejectWithValue(error.message);
        }
    }
);

const postSlice = createSlice({
    name:'posts',
    initialState:{
        posts:[],
        status:null,
        error:null
    },
    reducers:{
        setPosts:(state, action)=>
            state.posts=action.payload
    },
    extraReducers:{
        [getPosts.fulfilled]:(state, action)=>{
            state.status='resolved';
            state.posts=action.payload;
        },
        [getPosts.pending]:(state)=>{
            state.status='loading'
        },
        [getPosts.rejected]:(state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

export const {setPosts}=postSlice.actions;

export default postSlice.reducer;