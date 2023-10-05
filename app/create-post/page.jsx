"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

 import Form from "@components/Form";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    creator: null, // Replace with an appropriate initial value or null
    warehouseName: "", // Replace with an appropriate initial value
    buildDate: null, // Replace with an appropriate initial value or null
    currentStorageStatus: "", // Replace with an appropriate initial value
    location: null, // Replace with an appropriate initial value or null
    prompt: "",
    tag: "",
    storageCapacity: 0, // Replace with an appropriate initial value
    availableStorage: 0, // Replace with an appropriate initial value
    description: "", // Replace with an appropriate initial value
    goodsType: "", // Replace with an appropriate initial value or empty array
  });
  

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Log the post object to check if location is present
    console.log("Post object:", post);
  
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          userId : session?.user.id,
          creator: post.creator,
          warehouseName: post.warehouseName,
          buildDate: post.buildDate,
          currentStorageStatus: post.currentStorageStatus,
          location: post.location,
          prompt: post.prompt,
          tag: post.tag,
          storageCapacity: post.storageCapacity,
          availableStorage: post.availableStorage,
          description: post.description,
          goodsType: post.goodsType,
          image: post.image,
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