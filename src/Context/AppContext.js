import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPages] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // Data filling
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            setPages(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (err) {
            console.error("Error in fetching data:", err);
            // Optionally, handle error or display a message to the user
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPages(page);
        fetchBlogPosts(page);
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPages,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    // Step 2
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
