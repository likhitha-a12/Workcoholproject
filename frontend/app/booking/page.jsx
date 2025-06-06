"use client";

import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  const ticketPricing = {
    basic: 30000,
    premium: 50000,
    luxury: 80000,
  };

  const eventMultipliers = {
    wedding: 2,
    birthday: 1.5,
    corporate: 1,
    concert: 2.5,
    other: 1,
  };

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_ph: "",
    address: "",
    city: "",
    country: "",
    event_name: "wedding",
    ticket_type: "basic",
    ticket_quantity: 0,
    ticket_price: ticketPricing["basic"],
    total_price: 0,
    promo_code: "",
    payment_method: "",
    payment_status: "",
  });

  useEffect(() => {
    const basePrice = ticketPricing[formData.ticket_type] || 0;
    const multiplier = eventMultipliers[formData.event_name] || 1;
    const finalPrice = basePrice * multiplier;

    setFormData((prev) => ({
      ...prev,
      ticket_price: finalPrice,
    }));
  }, [formData.ticket_type, formData.event_name]);

  useEffect(() => {
    const quantity = parseInt(formData.ticket_quantity) || 0;
    const price = parseFloat(formData.ticket_price) || 0;
    setFormData((prev) => ({
      ...prev,
      total_price: quantity * price,
    }));
  }, [formData.ticket_quantity, formData.ticket_price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Booking Successful!");
        console.log("Submitted Data:", formData);
        setTimeout(() => router.push("/thankyou"), 2000);
      } else {
        toast.error("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Something went wrong!");
    }
  };

  const handlePayment = (method) => {
    setFormData((prev) => ({ ...prev, payment_method: method }));
    if (method === "gpay") {
      window.location.href = "https://pay.google.com/";
    } else if (method === "phonepe") {
      window.location.href = "https://www.phonepe.com/";
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center p-6" style={{ backgroundImage: "url('/images/book1.jpg')" }}>
      <Toaster position="top-right" />

      <div className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Book Your Event</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="font-bold text-lg">Customer Details</h3>
          {["customer_name", "customer_email", "customer_ph", "address", "city", "country"].map((field) => (
            <div key={field}>
              <label className="block font-semibold capitalize">{field.replace(/_/g, " ")}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="form-control w-full p-2 border rounded text-black"
              />
            </div>
          ))}

          <h3 className="font-bold text-lg mt-6">Event Details</h3>
          <div>
            <label className="block font-semibold">Event Name</label>
            <select
              name="event_name"
              value={formData.event_name}
              onChange={handleChange}
              className="form-control w-full p-2 border rounded text-black"
            >
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate</option>
              <option value="concert">Concert</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Ticket Type</label>
            <select
              name="ticket_type"
              value={formData.ticket_type}
              onChange={handleChange}
              className="form-control w-full p-2 border rounded text-black"
            >
              <option value="basic">Basic - ₹30000</option>
              <option value="premium">Premium - ₹50000</option>
              <option value="luxury">Luxury - ₹80000</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Ticket Quantity</label>
            <input
              type="number"
              name="ticket_quantity"
              value={formData.ticket_quantity}
              onChange={handleChange}
              min="0"
              className="form-control w-full p-2 border rounded text-black"
            />
          </div>

          <div>
            <label className="block font-semibold">Ticket Price (per ticket)</label>
            <input
              type="number"
              name="ticket_price"
              value={formData.ticket_price}
              readOnly
              className="form-control w-full p-2 border rounded bg-gray-100 text-black"
            />
          </div>

          <div>
            <label className="block font-semibold">Total Price</label>
            <input
              type="number"
              name="total_price"
              value={formData.total_price}
              readOnly
              className="form-control w-full p-2 border rounded bg-gray-100 text-black"
            />
          </div>

          <h3 className="font-bold text-lg mt-6">Other Details</h3>
          <div>
            <label className="block font-semibold">Promo Code</label>
            <input
              type="text"
              name="promo_code"
              value={formData.promo_code}
              onChange={handleChange}
              className="form-control w-full p-2 border rounded text-black"
            />
          </div>

          <div className="flex space-x-4 mt-4">
            <button
              type="button"
              onClick={() => handlePayment("gpay")}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Pay with GPay
            </button>
            <button
              type="button"
              onClick={() => handlePayment("phonepe")}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Pay with PhonePe
            </button>
          </div>

          <div className="text-center mt-6">
            <button type="submit" className="btn btn-primary px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}