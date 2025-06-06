'use client';
import { useState } from "react";
import Image from "next/image";

const eventData = {
  weddings: {
    title: "Weddings",
    images: ["weddings1.jpg", "weddings2.jpg", "weddings3.jpg"],
  },
  birthdays: {
    title: "Birthdays",
    images: ["birthdays1.jpg", "birthdays2.jpg", "birthdays3.jpg"],
  },
  corporate: {
    title: "Corporate Events",
    images: ["corporates1.jpg", "corporates2.jpg", "corporates3.jpg"],
  },
  concerts: {
    title: "Concert Nights",
    images: ["concerts1.jpg", "concerts2.jpg", "concerts3.jpg"],
  },
  others: {
    title: "Other Events",
    images: ["others1.jpg", "others2.jpg", "others3.jpg"],
  },
};

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const goToRegisterPage = () => {
    window.location.href = "/register";
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      <header className=" text-black text-center py-6">
        <h1 className="text-4xl font-bold">Our Gallery</h1>
      </header>

      {/* Filter Buttons */}
      <div className="text-center my-6">
        {["all", ...Object.keys(eventData)].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`mx-2 px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            {category === "all" ? "All Events" : eventData[category].title}
          </button>
        ))}
      </div>

      {/* Event Sections */}
      {Object.entries(eventData).map(([key, event]) => {
        const isVisible = selectedCategory === "all" || selectedCategory === key;
        return (
          <section
            key={key}
            id={key}
            className={`event-section bg-white m-6 p-6 rounded-lg shadow ${
              isVisible ? "block" : "hidden"
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-4">{event.title}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {event.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={`/images/${img}`}
                  alt={`${event.title} ${idx + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg transition-transform hover:scale-105"
                />
              ))}
            </div>
            <p className="mt-4 text-center text-gray-600 whitespace-pre-line">
              {event.description}
            </p>
          </section>
        );
      })}

      {/* Signup Button */}
      <div className="text-center my-12">
        <button
          onClick={goToRegisterPage}
          className="bg-purple-400 text-white px-16 py-4 text-lg rounded hover:bg-pink-900 transition"
        >
          Sign Up To Explore More
        </button>
      </div>
    </div>
  );
}
