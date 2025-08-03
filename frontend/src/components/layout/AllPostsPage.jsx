// // src/pages/AllPostsPage.jsx

// import { useEffect, useState } from "react";
// import { axiosInstance } from "../../lib/axios";
// import { Loader } from "lucide-react";
// // import { Loader } from "lucide-react";
// import { useParams } from "react-router-dom";

// const AllPostsPage = () => {
//    const { userId } = useParams();
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const res = await axiosInstance.get(`/posts/user/${userId}`, {
//           withCredentials: true,
//         });
//         setPosts(res.data || []);
//       } catch (err) {
//         console.error("Failed to load posts", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) fetchUserPosts();
//   }, [userId]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center p-6">
//         <Loader className="animate-spin size-6" />
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto mt-6 space-y-4">
//       {posts.length === 0 ? (
//         <p className="text-center text-gray-500">No posts available.</p>
//       ) : (
//         posts.map((post) => (
//           <div key={post._id} className="bg-white shadow p-4 rounded-lg">
//             <p className="text-gray-800 mb-2">{post.content}</p>
//             {post.image && (
//               <img
//                 src={post.image}
//                 alt="Post"
//                 className="rounded w-full max-h-64 object-cover"
//               />
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AllPostsPage;



// src/pages/AllPostsPage.jsx

import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";

// ✅ Import Post component
// import Post from "../components/Post";
import Post from "../Post";

const AllPostsPage = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await axiosInstance.get(`/posts/user/${userId}`, {
          withCredentials: true,
        });
        setPosts(res.data || []);
      } catch (err) {
        console.error("Failed to load posts", err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchUserPosts();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <Loader className="animate-spin size-6" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-6 space-y-6">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        posts.map((post) => (
          <Post key={post._id} post={post} isOwnPost={false}/>
        ))
      )}
    </div>
  );
};

export default AllPostsPage;
