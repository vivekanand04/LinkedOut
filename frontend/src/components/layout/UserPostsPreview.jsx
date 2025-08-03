// src/components/UserPostsPreview.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Loader } from "lucide-react";
import { axiosInstance } from "../../lib/axios";
import ProfilePage from "../../pages/ProfilePage";

const UserPostsPreview = ({ userId, isOwnProfile }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {ProfilePage
      try {
        const res = await axiosInstance.get(`/posts/user/${userId}`, {
          withCredentials: true,
        });
        setPosts(res.data || []);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      } finally {
        setLoading(false);
      }
    };
    if (userId) fetchPosts();
  }, [userId]);

  const handleNavigate = () => {
    navigate(`/posts/${userId}`);
  };

   const handleNavigate2 = () => {
    navigate(`/`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <Loader className="animate-spin size-6" />
      </div>
    );
  }


 

  

 return (
  <div className="bg-white shadow rounded-lg p-6 my-6">
    <h2 className="text-xl font-semibold mb-4">
      {isOwnProfile ? "Your Posts" : "Posts"}
    </h2>

 {posts.length !== 0 ?(
    <div className="mb-4">
      {/* 🟦 Post content box with truncation */}
      <div className="bg-gray-100 p-3 rounded mb-2">
        <p className="text-gray-800 text-sm">
          {posts[0].content.split(" ").slice(0, 25).join(" ")}
          {posts[0].content.split(" ").length > 25 && "..."}
        </p>
      </div>

      {/* 🖼 Optional post image */}
      {posts[0].image && (
        <img
          src={posts[0].image}
          alt="Post"
          className="rounded max-h-64 w-full object-cover"
        />
      )}
    </div>):(" ")
}

    {/* 🔘 Show all button */}
    {/* if(posts.length !== 0){
    <button
      onClick={handleNavigate}
      className="mt-2 text-blue-600 hover:underline text-sm"
    >
      Show All Posts
    </button>
}
else{
  <button
      onClick={handleNavigate2}
    
    >
      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500 ">
        Export your first post...
      </div>
    </button>
} */}


    {posts.length !== 0 ? (
      <button
        onClick={handleNavigate}
        className="mt-2 text-blue-600 hover:underline text-sm"
      >
        Show All Posts
      </button>
    ) : (
      <button onClick={handleNavigate2} >
        <div className="mt-2 text-blue-600 hover:underline text-sm">
          Export your first post...
        </div>
      </button>
    )}
  


  </div>
);


};

export default UserPostsPreview;

