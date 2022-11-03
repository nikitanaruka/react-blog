import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();  // search = ?cat=life or ?user=safak

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts()
  }, [search]);   // []= it will render only in begining

  return (
    <>
      <Header/>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
