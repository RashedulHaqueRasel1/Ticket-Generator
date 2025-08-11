"use client";

import React, { useEffect, useState } from "react";

type CardProps = {
  eventName?: string;
  date?: string;
  location?: string;
  ticketNumber?: string | number;
  logo?: string;
};

const Card: React.FC<CardProps> = ({
  eventName = "Coding Conf",
  date = "TBA",
  location = "Somewhere",
  ticketNumber = "0000",
  logo = "/images/logo-mark.svg",
}) => {
  const [user, setUser] = useState<{
    fullName?: string;
    email?: string;
    github?: string;
    avatar?: string;
  }>({});

  useEffect(() => {
    const data = localStorage.getItem("tickets");
    if (data) {
      const tickets = JSON.parse(data);
      if (Array.isArray(tickets) && tickets.length > 0) {
        setUser(tickets[tickets.length - 1]); // last ticket
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0b1e] to-[#29175c] text-white p-6 font-sans">
      <p className="text-center max-w-lg text-gray-300 mb-8 sm:px-4">
        We&apos;ve emailed your ticket to{" "}
        <span className="text-red-400 font-semibold">{user.email}</span> and will
        send updates in the run up to the event.
      </p>

      <div className="relative bg-gradient-to-br from-[#2b213c] to-[#3f2764] rounded-2xl border border-pink-400 p-6 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 shadow-lg max-w-sm sm:max-w-xl w-full mx-auto">
        <div className="flex flex-col flex-1 z-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
            {logo && (
              // For event logo, next/image is okay since this is a static image URL
              <img
                src={logo}
                alt="Event Logo"
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
            <h2 className="text-2xl font-bold text-pink-200">{eventName}</h2>
          </div>
          <p className="text-gray-300 text-sm sm:text-base mb-4 ml-10 sm:mb-6">
            {date} / {location}
          </p>

          <div className="flex gap-2 items-center sm:items-start ">
            {user.avatar && (
              // Use <img> because base64 string isn't supported by next/image by default
              <img
                src={user.avatar}
                alt="Avatar"
                width={96}
                height={96}
                className="rounded-2xl mb-2 shadow-md mt-5"
              />
            )}

            <div className="flex flex-col justify-center mt-10">
              <p className="text-2xl">{user.fullName}</p>

              <div className="flex">
                <p className="font-semibold text-lg">
                  <a href={user.github} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/icon-github.svg"
                      alt="GitHub"
                      className="w-6 h-6 inline-block mr-1"
                    />
                  </a>
                </p>

                <p className="text-sm text-gray-400 mt-1">@{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 sm:mt-0 sm:pt-0 sm:pl-6 border-t border-dashed border-pink-400 sm:border-t-0 sm:border-l z-10 text-pink-300 font-mono text-xl flex items-center justify-center">
          #{ticketNumber}
        </div>
      </div>
    </div>
  );
};

export default Card;
