import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    success: true,
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const closePopupAuto = () => {
    setTimeout(() => {
      setPopup((prev) => ({ ...prev, show: false }));
    }, 2500); // ⏱ auto-close after 2.5s
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_cl1a4rw",
        "template_70l07ek",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "9oOrQmBq7mgkXVeS6"
      )
      .then(
        () => {
          setLoading(false);
          setPopup({
            show: true,
            success: true,
            message: "Message sent successfully!",
          });
          setForm({ name: "", email: "", message: "" });
          closePopupAuto();
        },
        () => {
          setLoading(false);
          setPopup({
            show: true,
            success: false,
            message: "Failed to send message. Please try again.",
          });
          closePopupAuto();
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#020617] via-[#07142c] to-[#020617] flex flex-col justify-between"
    >
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* LEFT: CONTACT INFO */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="space-y-6">
            <InfoCard title="Email" value="praneethacharya676@gmail.com" />
            <InfoCard title="Phone" value="+91 9513281676" />
            <InfoCard title="Location" value="Udupi, Karnataka, India" />
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <form
          onSubmit={sendEmail}
          className="bg-[#0f172a] border border-cyan-400/20 rounded-2xl p-8 space-y-5"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            Send a Message
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#020617] text-white border border-gray-700 focus:border-cyan-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#020617] text-white border border-gray-700 focus:border-cyan-400 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#020617] text-white border border-gray-700 focus:border-cyan-400 outline-none resize-none"
          />

          {/* SEND BUTTON WITH LOADING */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold transition
              ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-cyan-400 text-black shadow-lg shadow-cyan-400/40 hover:scale-105"
              }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      {/* FOOTER CONTACT BAR */}
      <footer className="border-t border-cyan-400/20 py-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Praneeth Acharya ·
          <span className="text-cyan-400 ml-1">
            praneethacharya676@gmail.com
          </span>
        </p>
      </footer>

      {/* POPUP MODAL */}
      {popup.show && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#0f172a] border border-cyan-400/30 rounded-xl p-6 w-[90%] max-w-sm text-center">
            <h3
              className={`text-xl font-semibold mb-3 ${
                popup.success ? "text-green-400" : "text-red-400"
              }`}
            >
              {popup.success ? "Success" : "Error"}
            </h3>

            <p className="text-gray-300">
              {popup.message}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

/* CONTACT INFO CARD */
function InfoCard({ title, value }) {
  return (
    <div className="bg-[#0f172a] border border-cyan-400/20 rounded-xl p-5">
      <p className="text-cyan-400 font-semibold">{title}</p>
      <p className="text-gray-300 mt-1">{value}</p>
    </div>
  );
}
