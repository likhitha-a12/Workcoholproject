'use client';

import Image from 'next/image';

export default function AboutPage() {
  const sections = [
    {
      image: '/images/about1.jpg',
      title: 'What we do!',
      text: `Welcome to our Event Management platform. We specialize in organizing corporate, cultural, and personal events with professionalism and creativity. Our mission is to make your events memorable, stress-free, and successful. From planning to execution, we bring your vision to life with a dedicated team of professionals.`,
    },
    {
      image: '/images/about2.jpg',
      title: 'Our Vision',
      text: `We aim to redefine event experiences with creative ideas and seamless execution. Your satisfaction is our priority. 
      Let us bring your ideas to life and make them unforgettable. Our vision is to establish ourselves as the foremost event management company in India, dedicated to crafting experiences that etch cherished memories into the tapestry of your life.
      We aspire to create impactful and transformational events that not only celebrate your success but also translate it into tangible value. Our commitment is to consistently meet and exceed your expectations, fueled by a combination of excellent ideas and flawless execution.
      We envision a future where every event we undertake becomes a milestone in your journey, leaving an indelible mark on your memory lane that lasts a lifetime.`,
    },
    {
      image: '/images/about3.jpg',
      title: 'Our Team',
      text: `Meet our passionate team of event planners, designers, and coordinators dedicated to making your event a grand success. Together, we turn your dreams into reality. We specialize in creating award-winning events, positioning ourselves among the top event planning companies in the country.
      As your comprehensive event planner, we serve as your go-to resource for all your significant occasions. 
      Our approach involves starting from scratch, meticulously crafting a unique blueprint tailored to your specific needs. With our unwavering commitment,
      we provide 24/7 assistance to ensure every detail is seamlessly executed. Our overarching mission is to transform your dream into a reality, making your aspirations our guiding purpose in every event we undertake.`,
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed p-10"
      style={{ backgroundImage: `url('/images/bg.jpg')` }}
    >
      <h1 className="text-5xl font-bold text-center text-purple-800 mb-16">About Us</h1>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-16 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="md:w-1/2 p-4">
            <Image
              src={section.image}
              width={600}
              height={400}
              alt={section.title}
              className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">{section.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
