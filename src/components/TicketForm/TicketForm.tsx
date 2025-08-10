import React, { useState } from "react";

type Form = {
  fullName: string;
  email: string;
  github: string;
  avatar?: File | null;
};

type Props = {
  form: Form;
  setForm: (s: Form) => void;
};

export default function TicketForm({ form, setForm }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = (file: File) => {
    
    if (!file.type.startsWith("image/")) {
      setError("Only JPG or PNG images are allowed.");
      return;
    }

    setError(null);
    setForm({ ...form, avatar: file });
    setPreview(URL.createObjectURL(file));
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <form
      className="space-y-6 container mx-auto p-6 rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Upload Avatar */}
      <div>
        <label className="block text-sm font-medium mb-2 text-white/80">
          Upload Avatar
        </label>

        <div
          className="border border-dashed border-white/20 rounded-lg p-6 text-center cursor-pointer hover:border-white/40 transition"
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
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
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={onFileChange}
        />

        {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
        {!error && (
          <p className="mt-2 text-xs text-white/50">
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        )}
      </div>

      {/* Full Name */}
      <div>
        <label className="text-sm block mb-2 text-white/80">Full Name</label>
        <input
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange-400"
          placeholder="Your name"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm block mb-2 text-white/80">
          Email Address
        </label>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange-400"
          placeholder="example@email.com"
          required
          type="email"
        />
      </div>

      {/* GitHub */}
      <div>
        <label className="text-sm block mb-2 text-white/80">
          GitHub Username
        </label>
        <input
          value={form.github}
          onChange={(e) => setForm({ ...form, github: e.target.value })}
          className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-orange-400"
          placeholder="@yourusername"
        />
      </div>
    </form>
  );
}
