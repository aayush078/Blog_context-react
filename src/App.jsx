import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";


function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() =>{
    fetchBlogPosts();
  },[]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  );
}

export default App;
