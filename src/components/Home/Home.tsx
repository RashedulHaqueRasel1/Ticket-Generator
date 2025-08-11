import { useRouter } from "next/navigation";
import Background from "../Background/Background";
import Header from "./Header/Header";
import { useState } from "react";
import TicketForm from "../TicketForm/TicketForm";

type FormData = {
  fullName: string;
  email: string;
  github: string;
  avatar?: File | null;
};

const Home = () => {
  return (
    <div className="relative">
      <Background />
      <main className="conatiner mx-auto z-10 min-h-screen flex items-start justify-center ">
        <div className="w-full max-w-3xl">
          <Header
            title="Your Journey to Coding Conf 2025 Starts Here!"
            subtitle="Secure your spot at next year's biggest coding conference."
          />

          <div className="mt-8 w-[90%]  md:w-[70%] mx-auto">
            <div className="">
              <TicketForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
