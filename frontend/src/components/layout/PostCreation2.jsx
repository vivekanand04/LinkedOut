// src/components/PostCreation.jsx
// import { X } from "lucide-react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { axiosInstance } from "../lib/axios";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";
import { Image, Loader } from "lucide-react";

const PostCreation2 = ({ user }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: async (postData) => {
      const res = await axiosInstance.post("/posts/create", postData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Post created!");
      setContent("");
      setImage(null);
      setImagePreview(null);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Failed to create post");
    },
  });

  const handlePostCreation = async () => {
    const postData = { content };
    if (image) {
      postData.image = await toBase64(image);
    }
    createPost(postData);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  return (
    <div className='bg-secondary p-4 rounded-lg shadow'>
      <textarea
        className='w-full p-3 rounded-lg bg-base-100 resize-none min-h-[100px]'
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {imagePreview && <img src={imagePreview} alt="preview" className='my-2 rounded' />}

      <div className='flex justify-between items-center mt-4'>
        <label className='flex gap-2 cursor-pointer text-info'>
          <Image size={20} />
          <span>Photo</span>
          <input
            type='file'
            accept='image/*'
            className='hidden'
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);
              toBase64(file).then(setImagePreview);
            }}
          />
        </label>

        <button
          className='btn btn-primary text-white'
          disabled={isPending}
          onClick={handlePostCreation}
        >
          {isPending ? <Loader className='animate-spin size-4' /> : "Share"}
        </button>
      </div>
    </div>
  );
};

export default PostCreation2;


