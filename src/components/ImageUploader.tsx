"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

const UPLOAD_PRESET = "ucx2whne";
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

if (!CLOUD_NAME) {
  throw new Error("Cloudinary cloud name is missing. Check .env.local.");
}

interface ImageUploaderProps {
  onUpload: (url: string) => void;
}

function ImageUploader({ onUpload }: ImageUploaderProps) {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File) => {
    setLoading(true);
    setError(null);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);
    if (CLOUD_NAME) {
      data.append("CLOUD_NAME", CLOUD_NAME);
    }

    try {
      const res = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error("Upload failed. Check Cloudinary settings.");
      }

      const uploadedData = await res.json();
      setImage(uploadedData.secure_url);
      onUpload(uploadedData.secure_url);
    } catch (error) {
      setError("Image upload failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      uploadImage(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center gap-3 mb-2">
      <div
        {...getRootProps()}
        className={`w-60 h-60 flex flex-col items-center justify-center rounded-3xl cursor-pointer px-5 border ${
          isDragActive
            ? "border-blue-500 bg-blue-100"
            : "border-gray-300 bg-[#0E464F]"
        }`}
      >
        <input {...getInputProps()} />
        {image ? (
          <CldImage
            src={image}
            width={150}
            height={150}
            alt="Uploaded Image"
            className="rounded-full object-cover"
          />
        ) : (
          <>
            <Image src="/upload.svg" alt="Upload Icon" width={24} height={24} />
            <p className="text-[#FAFAFA] text-center font-Roboto text-base font-normal mt-6">
              {isDragActive
                ? "Drop the image here..."
                : "Drag & drop an image, or click to upload"}
            </p>
          </>
        )}
      </div>
      {loading && <p className="text-gray-500">Uploading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default ImageUploader;
