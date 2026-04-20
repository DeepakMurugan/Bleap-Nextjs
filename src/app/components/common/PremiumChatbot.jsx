import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

const steps = [
  {
    key: "businessNeed",
    question: "What do you need help with?",
    placeholder: "e.g., website, SEO, marketing",
    type: "text",
  },
  {
    key: "userName",
    question: "What's your name?",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    key: "businessType",
    question: "What kind of business?",
    placeholder: "e.g., clinic, shop, agency",
    type: "text",
  },
  {
    key: "painPoint",
    question: "What's your main challenge?",
    placeholder: "Tell us briefly",
    type: "text",
  },
  {
    key: "goal",
    question: "What do you want to achieve?",
    options: ["More leads", "Better website", "Online sales", "Brand growth", "Full digital setup"],
    placeholder: "Pick your goal",
    type: "option",
  },
  {
    key: "service",
    question: "Which service interests you?",
    options: ["Web Development", "SEO", "WhatsApp Automation", "AI SEO", "Ecommerce", "Digital Marketing", "Full Service"],
    placeholder: "Choose one",
    type: "option",
  },
  {
    key: "budget",
    question: "What's your budget?",
    options: ["Below ₹25K", "₹25K-50K", "₹50K-1L", "₹1L+", "Not sure"],
    placeholder: "Select range",
    type: "option",
  },
  {
    key: "timeline",
    question: "When to start?",
    options: ["Now", "1 week", "1 month", "3 months", "Exploring"],
    placeholder: "Pick timeline",
    type: "option",
  },
  {
    key: "email",
    question: "Your email?",
    placeholder: "Enter email",
    type: "text",
  },
  {
    key: "phone",
    question: "Your phone?",
    placeholder: "Enter phone",
    type: "text",
  },
  {
    key: "project",
    question: "Any other details?",
    placeholder: "Share if needed",
    type: "text",
  },
];

export default function PremiumChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 Ready to grow?" },
    { from: "bot", text: "What can I help with today?" },
  ]);
  const [stepIndex, setStepIndex] = useState(0);
  const [input, setInput] = useState("");
  const [formData, setFormData] = useState({});
  const [typing, setTyping] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const chatRef = useRef(null);
  const currentStep = steps[stepIndex];

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  useEffect(() => {
    if (open && messages.length === 2) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text: steps[0].question }]);
      }, 600);
    }
  }, [open]);

  const send = async (value) => {
    if (!value) return;

    setMessages((prev) => [...prev, { from: "user", text: value }]);

    const updated = { ...formData, [currentStep.key]: value };
    setFormData(updated);
    setInput("");
    setTyping(true);

    setTimeout(async () => {
      setTyping(false);

      if (stepIndex < steps.length - 1) {
        setStepIndex(stepIndex + 1);
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: steps[stepIndex + 1].question },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "✨ Finalizing your request..." },
        ]);

        await emailjs.send(
          "service_nx072t8",
          "template_cftwqjk",
          {
            ...updated,
            message: `👤 Name: ${updated.userName || ""}

📞 Phone: ${updated.phone || ""}

📧 Email: ${updated.email || ""}

🏢 Business Type: ${updated.businessType || ""}

💰 Budget: ${updated.budget || ""}

⏱ Timeline: ${updated.timeline || ""}

🎯 Goal: ${updated.goal || ""}`,
          },
          "JX17EV2EsaeLH8Stb"
        );

        setSubmitted(true);
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Awesome—thank you for reaching out! 🙌" },
          { from: "bot", text: "We’ll review your details and respond within 2 hours." },
        ]);
      }
    }, 700);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
      >
        <div className="relative">
          <div className="absolute inset-0 animate-ping bg-pink-400 rounded-full opacity-30"></div>
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl shadow-2xl hover:scale-110 transition">
            💬
          </div>
        </div>
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[380px] h-[620px] bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border border-white/40">
          
          {/* HEADER */}
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 p-5 text-white">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-lg">Bleap Assistant</div>
                <div className="text-xs opacity-80">Let’s find the right solution for your business.</div>
              </div>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* PROGRESS */}
            <div className="mt-3 h-1 bg-white/30 rounded-full">
              <div
                className="h-1 bg-white rounded-full transition-all"
                style={{
                  width: `${((stepIndex + 1) / steps.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* CHAT */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl text-sm max-w-[80%] ${
                    msg.from === "bot"
                      ? "bg-white shadow"
                      : "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* TYPING */}
            {typing && (
              <div className="bg-white px-4 py-2 rounded-xl shadow w-fit">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}

            {/* OPTIONS */}
            {currentStep?.options && (
              <div className="flex flex-wrap gap-2">
                {currentStep.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => send(opt)}
                    className="px-3 py-2 text-xs bg-white border rounded-full hover:bg-gray-100"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INPUT */}
          {!currentStep?.options && !submitted && (
            <div className="p-4 border-t flex gap-2 bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={currentStep?.placeholder || "Type your answer..."}
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                onKeyDown={(e) => e.key === "Enter" && send(input)}
              />
              <button
                onClick={() => send(input)}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 rounded-full"
              >
                Enter
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}