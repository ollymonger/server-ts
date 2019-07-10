import React, { useEffect, useState } from 'react';
import { BlogPostModel } from '../server/server';


const App: React.FunctionComponent = props => {
    const [posts, setPosts] = useState<BlogPostModel[]>(null);

    useEffect(() => {
        const fetchData = async () => {
            let result = await fetch('http://localhost:8080/posts/');
            let data = await result.json()
            console.log(data);
            setPosts(data);
        }
        fetchData();
        console.log(posts);
    }, []);
    if (posts === null) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <p>all posts</p>
            {posts.map((post, id: number) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                </div>
            ))}
        </div>
    );
}

export { App };