import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/Loader/MyLoader";
import { useFetching } from "../hooks/UseFetching";

const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    
    useEffect(() => {
      fetchPostById(params.id)
      fetchCommentsById(params.id)
    }, []);

    console.log(params)
    return (
        <div>
            <h1>Вы попали на страницу поста c ID={params.id}</h1>
            {isLoading ? <MyLoader/> : <div>{post.id}.{post.title}</div>}
            <h1>Комментарии</h1>
            {isCommentsLoading ? <MyLoader/> : 
            <div>
                {comments.map (comment => 
                    <div key={comment.id} style={{marginTop: 15}}>
                        <h5>{comment.email}</h5>
                        <div>{comment.body}</div>
                    </div>)}
            </div>
            }
        </div>
    )
}

export default PostIdPage;