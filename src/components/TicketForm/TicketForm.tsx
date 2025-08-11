"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Home/Button";
import { Toaster, toast } from "sonner";

type FormDataItem = {
  fullName: string;
  email: string;
  github: string;
  avatar?: string;
};

export default function TicketForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  async function TricketGenerator(formData: FormData) {
    const fullName = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;
    const imageFile = formData.get("image") as File;

    let base64Image = "";
    if (imageFile && imageFile.size > 0) {
      base64Image = await fileToBase64(imageFile);
    }

    const newEntry: FormDataItem = {
      fullName,
      email,
      github,
      avatar: base64Image,
    };

  
    const existing = JSON.parse(localStorage.getItem("tickets") || "[]");
    existing.push(newEntry);

    localStorage.setItem("tickets", JSON.stringify(existing));

   
  toast.success("Ticket generated successfully!");


  setTimeout(() => {
    router.push("/card");
  }, 1000);
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > 500 * 1024) {
        setError("File size must be under 500KB");
        return;
      }

      setError(null);
      const base64 = await fileToBase64(file);
      setPreview(base64);
    }
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    TricketGenerator(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 container mx-auto p-6 rounded-lg"
    >
      <div>
        <label className="block text-sm font-medium mb-2 text-white/80">
          Upload Avatar
        </label>

        <div
          className="border border-dashed border-white/20 rounded-lg p-6 text-center cursor-pointer hover:border-white/40 transition"
          onClick={() => document.getElementById("avatarInput")?.click()}
        >
          {preview ? (
            <img
              src={preview}
              alt="Avatar preview"
              className="mx-auto h-24 w-24 object-cover rounded-full"
            />
          ) : (
            <p className="text-white/80 text-sm">
              Drag and drop or click to upload
            </p>
          )}
        </div>

        <input
          id="avatarInput"
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleImageChange}
        />

        {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
        {!error && (
          <p className="mt-2 text-xs text-white/50">
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        )}
      </div>

      <div>
        <label className="text-sm block mb-2 text-white/80">Full Name</label>
        <input
          className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange-400"
          placeholder="Your name"
          name="fullname"
          required
        />
      </div>

      <div>
        <label className="text-sm block mb-2 text-white/80">Email Address</label>
        <input
          className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange-400"
          placeholder="example@email.com"
          required
          type="email"
          name="email"
        />
      </div>

      <div>
        <label className="text-sm block mb-2 text-white/80">GitHub Username</label>
        <input
          className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange-400"
          placeholder="@yourusername"
          name="github"
        />
      </div>

      <div className="w-full max-w-lg flex justify-center">
        <Button />
       
      <Toaster position="top-center" />
      </div>
    </form>
  );
}
