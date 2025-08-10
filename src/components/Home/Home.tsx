import { useRouter } from "next/navigation";
import Background from "../Background/Background";
import Header from "./Header/Header";
import { useState } from "react";
import TicketForm from "../TicketForm/TicketForm";

const Home = () => {
  const router = useRouter();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    github: "",
  });

  // This is Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);


  };

  return (
    <div className="relative">
      <Background />

      <main className="relative z-10 min-h-screen flex items-start justify-center px-6 py-12">
        <div className="w-full max-w-3xl">
          <Header
            title="Your Journey to Coding Conf 2025 Starts Here!"
            subtitle="Secure your spot at next year's biggest coding conference."
          />

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6">
            
            <div className="max-w-lg">
              <TicketForm form={form} setForm={setForm} />
            </div>

            <div className="w-full max-w-lg flex justify-center">
              <button
                type="submit"
                className="mt-4 w-full py-3 rounded-lg font-semibold text-lg"
                style={{
                  background: "linear-gradient(90deg,#ff9a80,#ff7a66)",
                  color: "#1B1230",
                }}
              >
                Generate My Ticket
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
