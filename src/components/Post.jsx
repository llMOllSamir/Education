import React from 'react'

export default function Post({ post }) {
    return (
        <div className="card  h-100">
            <div className="card-body">
                <h5 className="card-title ">{post?.title}</h5>
                <p className="card-text text-secondary">{post?.body}</p>
            </div>
        </div>
    )
}
