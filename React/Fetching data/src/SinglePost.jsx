import { useEffect, useState } from "react";

function SinglePost() {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const singlePost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${postId}`);
                if (!response.ok) {
                    throw new Error("HTTP error: Status" + response.status);
                }
                let singlePostData =  response.json();
                setData(singlePost);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                loading(false);
            }
        }

        singlePost();
    },[postId]);

    return(
        <div></div>
    )
}
export default SinglePost;