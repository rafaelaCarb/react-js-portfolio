"use client";

import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const ref = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .sendForm("service_t5dpl3b", "template_57sndez", ref.current, {
        publicKey: "nadtEqt6fX_BMfprL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          setIsSubmitting(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSuccess(false);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="h-[120vh]  overflow-hidden">
      <div className=" grid-dark w-full h-fit py-12 rounded-xl ml-13 mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2 text-white">
              <h2 className="uppercase text-5xl md:text-6xl font-bold leading-tight mb-8 relative">
                Vamos criar algo incrível juntos!
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-white/60"></span>
              </h2>
              <p className="text-gray-300 mt-4 flex items-center">
                <span className="inline-block w-6 h-0.5 bg-white/40 mr-3"></span>
                rafaelacarbelimbandeira@gmail.com
              </p>
            </div>
            <div className="w-full md:w-1/2">
                <form className="space-y-6" ref={ref} onSubmit={handleSubmit}>
                  <div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border-b-2 border-white/30 focus:border-white text-white placeholder-gray-300 focus:outline-none transition-all duration-300 focus:bg-white/15 hover:bg-white/15"
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border-b-2 border-white/30 focus:border-white text-white placeholder-gray-300 focus:outline-none transition-all duration-300 focus:bg-white/15 hover:bg-white/15"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message" 
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border-b-2 border-white/30 focus:border-white text-white placeholder-gray-300 focus:outline-none transition-all duration-300 focus:bg-white/15 hover:bg-white/15 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-all rounded-md overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
                {success && <div className="text-white text-sm text-start mt-4">Sua mensagem foi enviada com sucesso!</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;