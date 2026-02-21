import React, { useState } from "react";

const Apply = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      setError("Please fill all fields");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter valid 10-digit WhatsApp number");
      return;
    }

    setError("");

    // 👉 Here you will integrate payment gateway
    alert("redirecting...");
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Apply Now
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-4 rounded-xl bg-black border border-zinc-700 focus:border-lime-400 outline-none"
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="text-sm text-gray-400">
              WhatsApp Number
            </label>
            <input
              type="tel"
              placeholder="Enter 10-digit number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-2 p-4 rounded-xl bg-black border border-zinc-700 focus:border-lime-400 outline-none"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Payment Button */}
          <button
            type="submit"
            className="w-full bg-lime-400 text-black font-bold text-lg py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition duration-300"
          >
            Join Now →
          </button>
        </form>

        <p className="text-gray-500 text-xs text-center mt-5">
          Secure payment • Instant confirmation
        </p>
      </div>
    </section>
  );
};

export default Apply;