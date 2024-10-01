import ImageUploader from "./components/ImageUploder.jsx";
import TextRecognition from "./components/TextRecognition.jsx";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <ImageUploader onImageSelect={handleImageSelect} />
      <TextRecognition selectedImage={selectedImage} />
    </>
  );
}

export default App;
