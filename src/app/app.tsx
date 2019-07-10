import React, { useEffect, useState } from 'react';
import { BlogPostModel } from '../server/server';


const App: React.FunctionComponent = props => {
    const [posts, setPosts] = useState<BlogPostModel[]>(null);

    useEffect(() => {
        const fetchData = async () => {
            let result = await fetch('http://localhost:8080/posts/');
            let data = await result.json();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, []);

    if (posts === null) {
        return <p>The blog posts are loading.....</p>
        
    }
    return (
        <div>
            <p>all posts</p>
            {posts.map((post, id: number) => (
                <div key={id}>
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                </div>
            ))}
        </div>
    );
}

export { App };