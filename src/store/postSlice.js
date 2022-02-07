import  {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {postService} from "../services";

export const getPosts=createAsyncThunk(
    'posts/getPosts',
    async function (_,{rejectWithValue}){
        try {
            const data=await postService.getAll();
            console.log(data);
            // if (!data.ok) {
            //     throw new Error('Server Error!');
            // }
            return data;
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
            state.error=null
        },
        [getPosts.rejected]:(state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

const postReducer=postSlice.reducer;

export const {setPosts}=postSlice.actions;

export default postReducer;