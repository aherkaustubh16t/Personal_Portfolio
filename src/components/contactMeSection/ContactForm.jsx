import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const form = useRef();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ko3hmpt", "template_ahbmmqd", form.current, {
        publicKey: "I6HAT5mUZH7WHabGE",
      })
      .then(
        () => {
          setSuccess("✅ Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess("❌ Failed to send message. Try again later.");
        }
      )
      .finally(() => {
        // Clear inputs regardless of success/failure
        setEmail("");
        setName("");
        setMessage("");
        setTimeout(() => setSuccess(""), 4000);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {success && (
        <p className="text-sm text-center mb-4 text-cyan-400 font-medium">
          {success}
        </p>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-5 w-full"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 px-4 rounded-lg bg-[#2c2c2c] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 px-4 rounded-lg bg-[#2c2c2c] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Write your message..."
          required
          className="p-4 rounded-lg bg-[#2c2c2c] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          value={message}
          onChange={handleMessage}
        ></textarea>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-white hover:from-orange-600 text-black font-bold py-3 rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-orange-300 active:scale-90 hover:bg-orange"
        >
          <FiSend className="text-xl" />
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
