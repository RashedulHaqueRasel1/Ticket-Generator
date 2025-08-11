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
      <main className="relative z-10 min-h-screen flex items-start justify-center px-6 py-12">
        <div className="w-full max-w-3xl">
          <Header
            title="Your Journey to Coding Conf 2025 Starts Here!"
            subtitle="Secure your spot at next year's biggest coding conference."
          />

          <div  className="mt-8 grid grid-cols-1 gap-6">
            <div className="max-w-lg">
              <TicketForm  />
            </div>

            
          </div>
        </div>
      </main>

    </div>
  );
};

export default Home;
