"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function EventsPage() {
  const [eventData, setEventData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/events/");
        const data = await response.json();
        setEventData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const goToBookingPage = () => {
    window.location.href = "/booking";
  };

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading events...</div>;
  }

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="bg-gray-900 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Event Gallery</h1>
      </header>

      {/* Filter Buttons */}
      <div className="text-center my-6 flex flex-wrap justify-center gap-4">
        {Array.from(new Set(eventData.map((event) => event.category)))
          .filter((category) => typeof category === "string" && category.trim() !== "")
          .map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-gray-700 text-white hover:bg-pink-500"
              } transition`}
            >
              {category}
            </button>
          ))}
      </div>

      {/* Event Sections */}
      <div className="flex flex-col items-center">
        {eventData
          .filter(
            (event) =>
              selectedCategory === "all" || event.category === selectedCategory
          )
          .map((event) => (
            <section
              key={event.id || event.title}
              className="bg-white m-4 p-6 rounded-lg shadow-md w-[90%] md:w-[100%] lg:w-[80%]"
            >
              <h2 className="text-3xl font-bold text-center mb-4">{event.title}</h2>

              <div className="flex flex-wrap justify-center gap-4">
                {Array.isArray(event.images) && event.images.length > 0 ? (
                  event.images.map((imgObj, index) => (
                    <div key={index} className="relative w-60 h-60">
                      <Image
                        src={imgObj.image}
                        alt={`${event.title} image ${index + 1}`}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <div className="bg-gray-300 w-full h-64 flex items-center justify-center text-gray-500 rounded-lg">
                    No Images Available
                  </div>
                )}
              </div>

              <p className="mt-4 text-center text-gray-600 whitespace-pre-line">
                {event.description}
              </p>
            </section>
          ))}
      </div>

      {/* Pricing Plans */}
      <section id="pricing" className="my-12 mx-6 text-center">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-gray-800">Our Pricing Plans</h2>
          <p className="text-xl text-gray-600">
            Choose the perfect package for your event needs. All plans are customizable.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Basic Package */}
          <div className="bg-white p-6 rounded-lg shadow-md w-80 hover:-translate-y-1 transition">
            <div className="bg-blue-200 text-blue-900 py-4 rounded-t-lg">
              <h3 className="text-xl font-semibold">Basic Package</h3>
            </div>
            <ul className="mt-4 text-left text-gray-600 list-disc list-inside">
              <li>Event consultation & planning</li>
              <li>Venue selection assistance</li>
              <li>Basic decor setup</li>
              <li>Vendor recommendations</li>
            </ul>
          </div>

          {/* Premium Package */}
          <div className="bg-white p-6 rounded-lg shadow-md w-80 hover:-translate-y-1 transition">
            <div className="bg-blue-500 text-white py-4 rounded-t-lg">
              <h3 className="text-xl font-semibold">Premium Package</h3>
            </div>
            <ul className="mt-4 text-left text-gray-600 list-disc list-inside">
              <li>All Basic features</li>
              <li>Full-day coordination</li>
              <li>Custom event theme</li>
            </ul>
          </div>

          {/* Luxury Package */}
          <div className="bg-white p-6 rounded-lg shadow-md w-80 hover:-translate-y-1 transition">
            <div className="bg-blue-900 text-white py-4 rounded-t-lg">
              <h3 className="text-xl font-semibold">Luxury Package</h3>
            </div>
            <ul className="mt-4 text-left text-gray-600 list-disc list-inside">
              <li>All Premium features</li>
              <li>Luxury decor & design</li>
              <li>VIP guest management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking Button */}
      <div className="text-center my-12">
        <button
          onClick={goToBookingPage}
          className="bg-green-600 text-white px-16 py-4 text-lg rounded hover:bg-pink-500 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
