import mongoose from "mongoose"
import { useRef } from "react"
import User from "./userModel"

const commentSchema = mongoose.Schema({
    message: { type: String, required: true },
    user: { type: String, useRef: User },
    
}, { timestamps: true })

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;