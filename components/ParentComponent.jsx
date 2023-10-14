import React, { useState } from 'react';
import Form from './Form';  // Adjust the import path based on your file structure
import GoogleMapsView from './GoogleMapsView';  // Adjust the import path based on your file structure

const ParentComponent = () => {
  const [post, setPost] = useState({
    creator: '',
    warehouseName: '',
    buildDate: '',
    currentStorageStatus: '',
    location: '',  // Add location property to post object
    prompt: '',
    tag: '',
    storageCapacity: 0,
    availableStorage: 0,
    description: '',
    goodsType: '',
    image: '',  // Add image property to post object
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Form
        type="Your Type"  // Replace with your desired type
        post={post}
        setPost={setPost}
        submitting={false}  // Adjust submitting state as needed
        handleSubmit={handleSubmit}
      />
      {/* Pass post and location to GoogleMapsView */}
      <GoogleMapsView post={post} location={post.location} />
    </div>
  );
};

export default ParentComponent;
