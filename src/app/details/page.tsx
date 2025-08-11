"use client";

import React, { useEffect, useState } from "react";

type Ticket = {
  fullName: string;
  email: string;
  github: string;
  avatar?: string;
};

const Details = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("tickets");
    if (data) {
      setTickets(JSON.parse(data));
    }
  }, []);

  if (tickets.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl bg-gradient-to-br from-[#0f0b1e] to-[#29175c]">
        No tickets found.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#0f0b1e] to-[#29175c] text-white">
      <h1 className="text-3xl mb-6 font-bold text-center">All Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-[#2b213c] rounded-xl p-6 flex gap-4 items-center shadow-lg border border-pink-400"
          >
            {ticket.avatar ? (
              <img
                src={ticket.avatar}
                alt={`${ticket.fullName} avatar`}
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-2xl">
                ?
              </div>
            )}
            <div>
              <p className="text-xl font-semibold">{ticket.fullName}</p>
              <p className="text-sm text-gray-300">{ticket.email}</p>
              <p className="text-sm text-gray-300">
                GitHub:{" "}
                <a
                  href={ticket.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 underline"
                >
                  {ticket.github}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;

