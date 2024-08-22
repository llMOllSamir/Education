import React, { useEffect, useState } from 'react'
import Post from './Post'

export default function Posts() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const fetchUrl = `https://jsonplaceholder.typicode.com/posts`
            const response = await fetch(fetchUrl)
            const data = await response.json()
            setPosts(data)
        }
        fetchData()
    }, [])

    return (
        <section className='my-5'>
            <h1 className='text-center text-primary fw-bold'>Posts  </h1>
            <div className="container">
                <div className="row ">
                    {posts.map((post) =>
                        <div key={post.id} className="col-12 my-3 col-md-6 col-lg-4">
                            <Post post={post} />
                        </div>
                    )}
                </div>
            </div>
        </section >
    )
}
