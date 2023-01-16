import { createSlice, nanoid } from '@reduxjs/toolkit'
import {sub} from 'date-fns'

const initialState = [
    { id: '1',title: 'Learning Redux Toolkit', content: 'Ive heard good things' , date:sub(new Date(),{minutes:10}).toISOString()},
    {id:'2',title:'Learning Slices.....',content:'The more i say slice, the more i want pizza',date:sub(new Date(),{minutes:5}).toISOString()},
]

const postsSlice= createSlice({
    name:'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(post) {
                return {
                    payload: {
                        id: nanoid(),
                        user:post.userId,
                        title: post.title,
                        content: post.content,
                        date:new Date().toISOString(),
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts
export const {postAdded}=postsSlice.actions

export default postsSlice.reducer