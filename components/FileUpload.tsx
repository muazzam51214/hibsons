"use client";
import api from "@/libs/axios";
import {
  upload,
} from "@imagekit/next";
import React, { useState } from "react";
import toast from "react-hot-toast";
import type { UploadResponse as IKUploadResponse } from "@imagekit/javascript/dist/interfaces/UploadResponse";

interface FileUploadProps {
  onSuccess: (res: IKUploadResponse) => void;
  onProgress?: (progress: number) => void;
  fileType?: "pdf" | "image";
}

const FileUpload = ({ onSuccess, onProgress, fileType }: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const validateFile = (file: File) => {
    if (fileType === "pdf") {
      if (file.type !== "application/pdf") {
        toast.error("Please select a valid PDF file");
        return false;
      }
    }
    if (fileType === "image") {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid Image file");
        return false;
      }
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      return false;
    }
    return true;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !validateFile(file)) return;
    setUploading(true);

    try {
      const toastId = toast.loading("Uploading... 0%");
      const res = await api.get("/api/imagekit-auth");
      const auth = res.data;
      
      const uploadResponse = await upload({
        file,
        fileName: file.name,
        publicKey: auth.publicKey,
        signature: auth.authenticationParameters.signature,
        expire: auth.authenticationParameters.expire,
        token: auth.authenticationParameters.token,
        onProgress: (event) => {
          if (event.lengthComputable && onProgress) {
            const percent = (event.loaded / event.total) * 100;
            toast.loading(`Uploading... ${percent}%`, { id: toastId });
          }
        },
      });
      toast.success("Upload complete!", { id: toastId });
      onSuccess(uploadResponse);
    } catch (error) {
      console.error(error);
      toast.error("Error in uploading file");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <input
        type="file"
        className="block w-full pl-10 pr-3 py-2 text-gray-600 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        accept={fileType === "pdf" ? "application/pdf" : "image/*"}
        onChange={handleFileChange}
      />
      {uploading && <span>Uploading...</span>}
    </>
  );
};

export default FileUpload;
