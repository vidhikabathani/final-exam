import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_post, get_post, update_post } from "../redux/Action";

function Blog() {
    let dispatch = useDispatch();
    let { post } = useSelector((store) => store.BlogReducer);

    useEffect(() => {
        dispatch(get_post());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(delete_post(id));
    };

    // const handleUpdate = (id) => {
    //     dispatch(update_post(id));
    // };

    return (
        <div className="container p-100 flex center justify-between">
            {post.map((ele) => {
                return (
                    <div className="main-div col-4">
                        <h3>{ele.title}</h3>
                        <img src={ele.url} alt="" />
                        <h6>{ele.date}</h6>
                        <p>{ele.detail}</p>
                        {/* <button onClick={() => handleUpdate(ele.id)}>Update</button> */}
                        <button onClick={() => handleDelete(ele.id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Blog;
