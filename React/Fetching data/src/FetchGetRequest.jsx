import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
function FetchGetRequest() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [singlePost, setSinglePost] = useState(null);
    const [error, setError] = useState(null);
    const { postId} = useParams();

    useEffect(() => {
        const fetchDataForPost = async () => {
            try {
                const response = await fetch( `https://jsonplaceholder.typicode.com/posts?_limit=8`);
                if (!response.ok) {
                    throw new Error('HTTP error: Status' + response.status);
                }
                let postData = await response.json();
                setData(postData);
                setError(null);
            }catch (err) {
                setError(err.message);
            }finally {
                setLoading(false);
            }
        };
        fetchDataForPost();
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        if (!postId) return;
        const fetchSinglePost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, controller);
                if (!response.ok) {
                    throw new Error('HTTP error: status' + response.status); 
                }
                let singlePost = await response.json();
                setSinglePost(singlePost);
                setError(null);
            }catch(err) {
                setError(err.message);
                console.log("Aborted")
            }finally {
                setLoading(false);
            }
        }
        fetchSinglePost();

        return () => controller.abort();
    },[postId]);

    return(
        <div className="flex">
            <div className="w-52 sm:w-80 flex justify-center items-center">
                {loading && (<div className="text-xl font-medium">Loading posts...</div>)}
                {error && <div className="text-red-700">{error}</div>}

                <ul>
                    {data && data.map(({id, title}) => {
                        
                        return(
                            <li
                                key={id}
                                className="border-b border-gray-100 text-sm sm:text-base"
                            >
                                <NavLink className={({isActive}) => {
                                    const baseClass = 'p-4 block hover:bg-gray-100';
                                    return isActive ? `${baseClass} bg-gray-100` : baseClass;
            
                                }}
                                to={`/post/${id}`}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="bg-gray-100 flex-1 p-4 min-h-[550px]">
                Single post here...
                <article>
                    <h1 className="text-xl md:text-2xl font-medium mb-6"> {singlePost?.title}</h1>
                    <p>{singlePost?.body}</p>
                </article>
            </div>
        </div>
        
    );
}

export default FetchGetRequest;