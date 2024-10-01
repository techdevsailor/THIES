import React, { useEffect, useState } from "react";
import Tesseract from "tesseract.js";

const TextRecognition = ({ selectedImage }) => {
  const [recognizedText, setRecognizedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const recognizeText = async () => {
      if (selectedImage) {
        setIsLoading(true);
        setProgress(0);
        
        try {
          const result = await Tesseract.recognize(selectedImage, 'eng', {
            logger: (m) => setProgress(m.progress) // Update progress
          });
          setRecognizedText(result.data.text);
        } catch (error) {
          setRecognizedText("Error recognizing text");
        } finally {
          setIsLoading(false);
        }
      }
    };

    recognizeText();
  }, [selectedImage]);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Recognized Text:</h2>
      {isLoading ? (
        <div>
          <p>Sabar kro Process ho rha ha... {Math.round(progress * 100)}%</p>
        </div>
      ) : (
        <p>{recognizedText || "No text recognized."}</p>
      )}
    </div>
  );
};

export default TextRecognition;
