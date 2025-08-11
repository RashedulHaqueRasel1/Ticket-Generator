"use client";

import React, { useState } from "react";
import Home from "@/components/Home/Home";

export default function FirstPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    github: "",
  });


  return (
    <div className="min-h-screen">
      <Home />
    </div>
  );
}
