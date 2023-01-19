import { createSlice, nanoid } from '@reduxjs/toolkit'
import {sub} from 'date-fns'

const initialState = [
    { id: '1',title: 'Learning Redux Toolkit', content: 'Ive heard good things' , date:sub(new Date(),{minutes:10}).toISOString(),reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
},
    {id:'2',title:'Learning Slices.....',content:'The more i say slice, the more i want pizza',date:sub(new Date(),{minutes:5}).toISOString(),reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
},
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
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
        }
                    }
                }
            }
        },
        reactionAdded:(state,action)=>{
            const{postId,reaction}=action.payload
            const existingPost = state.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        },
        postEdit: (state, action)=>{
            const {id,post } = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = post.title
                existingPost.content = post.content
                if (existingPost.userId) {
                    existingPost.userId = post.userId
                }
                else {
                    existingPost['useId']=post.useId
                }
            }
         },
        postDelete: (state, action) => {
            const id = action.payload
            state.splice(state.findIndex((post)=> post.id = id),1)
        }
    }
})

export const selectAllPosts = (state) => state.posts
export const {postAdded,reactionAdded,postDelete,postEdit}=postsSlice.actions

export default postsSlice.reducer