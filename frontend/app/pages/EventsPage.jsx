// src/pages/EventsPage.jsx
"use client";

// Your existing EventsPage component code

import React, { useState } from 'react';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import EventSection from '../components/EventSection';
import PricingPlans from '../components/PricingPlans';
import BookingButton from '../components/BookingButton';

const eventData = [
  {
    id: 'wedding',
    title: 'Weddings',
    images: [
      '/images/wedding1.jpg',
      '/images/wedding2.jpg',
      '/images/wedding3.jpg',
    ],
    heading: 'Weddings',
    description: 'Create the wedding of your dreams with our comprehensive planning, tailored to your unique style and vision. From intimate gatherings to grand celebrations, our expert team will guide you every step of the way, ensuring a stress-free and unforgettable experience. Let us bring your fairytale to life with meticulous attention to detail, personalized touches, and flawless execution.',
  },
  {
    id: 'birthday',
    title: 'Birthdays',
    images: [
      '/images/birthday1.jpg',
      '/images/birthday2.jpg',
      '/images/birthday3.jpg',
    ],
    heading: 'Birthday Bash',
    description: 'Celebrate birthdays in style with our expertly curated themes, activities, and entertainment. Whether it\'s a milestone birthday or a fun-filled gathering, we\'ll work with you to create an unforgettable experience that reflects the birthday person\'s personality and style. Our team will handle every detail, from decorations to cake design, to ensure a joyous and memorable celebration.',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    images: [
      '/images/corporate1.jpg',
      '/images/corporate2.jpg',
      '/images/corporate3.jpg',
    ],
    heading: 'Corporate Events',
    description: 'Professional planning for meetings, lunches, and team-building events that drive results and foster meaningful connections. Our experienced team will work closely with you to understand your objectives and preferences, crafting bespoke events that exceed your expectations. From venue selection to catering and entertainment, we\'ll ensure a seamless and productive experience that aligns with your company\'s vision and goals.',
  },
  {
    id: 'concert',
    title: 'Concerts',
    images: [
      '/images/concert1.jpg',
      '/images/concert2.jpg',
      '/images/concert3.jpg',
    ],
    heading: 'Concert Nights',
    description: 'End-to-end concert planning, including stay setup, artist coordination, and logistical management. Our team of experts will work tirelessly to deliver an electrifying experience that leaves your audience in awe. From venue selection to technical setup and artist management, we\'ll handle every aspect with precision and care, ensuring a memorable and impactful event that resonates with your audience.',
  },
  {
    id: 'other',
    title: 'Other Events',
    images: [
      '/images/other1.jpg',
      '/images/other2.jpg',
      '/images/other3.jpg',
    ],
    heading: 'Other Events',
    description: 'From baby showers to reunions, we cover every special occasion with creativity, passion, and attention to detail. Our team will work with you to craft unique and memorable experiences that reflect your personality, style, and preferences. Whether it\'s a family gathering, a milestone celebration, or a social gathering, we\'ll ensure a stress-free and enjoyable experience that creates lifelong memories.',
  },
];

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category !== 'all') {
      const section = document.getElementById(category);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

return (
  <div className="bg-gray-100 min-h-screen">
    <Header />
    <FilterButtons activeCategory={activeCategory} onFilter={handleFilter} />
    <h1 className="text-4xl font-bold text-center my-8">Our Event Collections</h1>
    
    {eventData.map((event) => (
      <EventSection
        key={event.id}
        id={event.id}
        title={event.title}
        images={event.images}
        heading={event.heading}
        description={event.description}
        visible={activeCategory === 'all' || activeCategory === event.id}
      />
    ))}

    <PricingPlans />
    <BookingButton />
  </div>
);
}