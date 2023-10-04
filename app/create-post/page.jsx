"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

 import Form from "@components/Form";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "", location: null,});


  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Log the post object to check if location is present
    console.log("Post object:", post);
  
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
          location: post.location,
        }),
      });
  
      // Rest of the code remains the same
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form
      type='List'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
    
  );
};

export default CreatePost;