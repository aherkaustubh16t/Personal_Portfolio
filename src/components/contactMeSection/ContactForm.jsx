import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [success, setSuccess] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/aherkaustubh166@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSuccess("✅ Message sent successfully!");
        formRef.current.reset(); // clear inputs
        setTimeout(() => setSuccess(""), 4000);
      } else {
        setSuccess("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccess("❌ An error occurred. Please try again.");
    }
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
        ref={formRef}
        className="flex flex-col gap-5 w-full"
        onSubmit={handleSubmit}
      >
        {/* Hidden input to disable captcha */}
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 px-4 rounded-lg bg-[#2c2c2c] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 px-4 rounded-lg bg-[#2c2c2c] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Write your message..."
          required
          className="p-4 rounded-lg bg-[#2c2c2c] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
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
