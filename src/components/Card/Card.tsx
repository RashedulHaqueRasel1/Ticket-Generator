import React from 'react';
import Image from 'next/image'; 

type CardProps = {
  name?: string;
  username?: string;
  email?: string;
  eventName?: string;
  date?: string;
  location?: string;
  profileImage?: string;
  ticketNumber?: string | number;
  logo?: string;
};

const Card: React.FC<CardProps> = ({
  name = "Guest User",
  username = "guest",
  email = "guest@email.com",
  eventName = "Untitled Event",
  date = "TBA",
  location = "Somewhere",
  profileImage = "/images/image-avatar.jpg",  
  ticketNumber = "0000",
  logo = "/images/logo-mark.svg",             
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0b1e] to-[#29175c] text-white p-6 font-sans">
      {/* Email notice */}
      <p className="text-center max-w-lg text-gray-300 mb-8 sm:px-4">
        We&apos;ve emailed your ticket to{" "}
        <span className="text-red-400 font-semibold">{email}</span> and will send updates in the run up to the event.
      </p>

      {/* Ticket Container */}
      <div className="relative bg-gradient-to-br from-[#2b213c] to-[#3f2764] rounded-2xl border border-pink-400 p-6 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 shadow-lg max-w-sm sm:max-w-xl w-full mx-auto">
        
        {/* Background pattern */}
        <Image
          src="/images/pattern-ticket.svg"
          alt="Background Pattern"
          fill
          className="absolute inset-0 object-cover opacity-10 pointer-events-none rounded-2xl"
        />

        {/* Left section: Logo & Event Info */}
        <div className="flex flex-col flex-1 z-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
            {logo && (
              <Image
                src={logo}
                alt="Event Logo"
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
            <h2 className="text-2xl font-bold text-pink-200">{eventName}</h2>
          </div>
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
            {date} / {location}
          </p>

          {/* Profile */}
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src={profileImage}
              alt={name}
              width={70}
              height={70}
              className="rounded-full border-2 border-pink-300 mb-2 shadow-md"
            />
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm text-gray-400">@{username}</p>
          </div>
        </div>

        {/* Ticket number */}
        <div className="mt-4 pt-4 sm:mt-0 sm:pt-0 sm:pl-6 border-t border-dashed border-pink-400 sm:border-t-0 sm:border-l z-10 text-pink-300 font-mono text-xl flex items-center justify-center">
          #{ticketNumber}
        </div>
      </div>
    </div>
  );
};

export default Card;
