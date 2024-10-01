import React, { useState } from "react";

const ImageUploader = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const image = event.target.files[0];

    // Validate file type
    if (image && image.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(image);
      setSelectedImage(imageUrl);
      onImageSelect(imageUrl); // Pass the selected image back to the parent
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    onImageSelect(null); // Notify the parent component to clear the selected image
  };

  return (
    <div className="text-center p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-red-500 hover:file:bg-blue-100"
        aria-label="Upload image"
      />

      {selectedImage && (
        <div className="flex flex-col items-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-xs max-h-64 mb-4 border rounded"
          />
          <button
            onClick={handleClearImage}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Clear Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
