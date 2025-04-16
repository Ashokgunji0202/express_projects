import React, { useEffect, useState } from 'react'

const UserDetailsPost = () => {
    const [blogPost, setBlogPost] = useState({
        userId:1,
        title: "",
        body: ""
    });
    console.log("blogPost", blogPost);
    useEffect(() => {
        
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(blogPost);
        if(blogPost.title && blogPost.body){
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogPost)
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
        }

    }
    return (
        <div>
            <form action=""onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={blogPost.title}
                        onChange={(e) => setBlogPost((currentBlogPost) =>({
                             ...currentBlogPost,
                            title: e.target.value
                         }))}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body </label>
                    <input
                        type="text" 
                        id="body"
                        name="body"
                        value={blogPost.body}
                        onChange={(e) => setBlogPost((currentBlogPost) =>({ 
                            ...currentBlogPost, 
                            body: e.target.value 
                        }))}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default UserDetailsPost
