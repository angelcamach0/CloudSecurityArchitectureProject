import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [lastSubmitAt, setLastSubmitAt] = useState(0);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState(false);
  const turnstileRef = useRef(null);
  const turnstileWidgetId = useRef(null);
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current) {
      return;
    }

    let cancelled = false;
    let attempts = 0;
    let intervalId = null;
    let scriptEl = null;
    const scriptSelector = 'script[data-turnstile="1"]';
    const renderWidget = () => {
      if (cancelled) {
        return false;
      }
      if (!window.turnstile || !turnstileRef.current) {
        return false;
      }

      if (turnstileWidgetId.current !== null) {
        window.turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
      }

      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: turnstileSiteKey,
        callback: (token) => {
          setTurnstileToken(token);
          setTurnstileError(false);
        },
        "error-callback": () => setTurnstileError(true),
        "expired-callback": () => setTurnstileToken(""),
      });

      return true;
    };

    const handleScriptLoad = () => {
      renderWidget();
    };

    const handleScriptError = () => {
      setTurnstileError(true);
    };

    scriptEl = document.querySelector(scriptSelector);
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      scriptEl.async = true;
      scriptEl.defer = true;
      scriptEl.dataset.turnstile = "1";
      scriptEl.addEventListener("load", handleScriptLoad);
      scriptEl.addEventListener("error", handleScriptError);
      document.body.appendChild(scriptEl);
    } else {
      scriptEl.addEventListener("load", handleScriptLoad);
      scriptEl.addEventListener("error", handleScriptError);
    }

    if (renderWidget()) {
      return () => {
        cancelled = true;
        if (scriptEl) {
          scriptEl.removeEventListener("load", handleScriptLoad);
          scriptEl.removeEventListener("error", handleScriptError);
        }
      };
    }

    intervalId = setInterval(() => {
      attempts += 1;
      if (renderWidget() || attempts > 120) {
        if (attempts > 120) {
          setTurnstileError(true);
        }
        clearInterval(intervalId);
      }
    }, 250);

    return () => {
      cancelled = true;
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (scriptEl) {
        scriptEl.removeEventListener("load", handleScriptLoad);
        scriptEl.removeEventListener("error", handleScriptError);
      }
    };
  }, [turnstileSiteKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    if (honeypot.trim()) {
      return;
    }
    const now = Date.now();
    if (now - lastSubmitAt < 15000) {
      alert("Please wait a moment before sending another message.");
      return;
    }
    if (!form.name.trim() || !form.message.trim()) {
      alert("Please fill out your name and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!turnstileSiteKey) {
      alert("Verification is not configured.");
      return;
    }
    if (!turnstileToken) {
      alert("Please complete the verification.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: honeypot.trim(),
          turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setLastSubmitAt(Date.now());
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
      if (window.turnstile && turnstileWidgetId.current !== null) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
      setTurnstileToken("");
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="hidden">
            <span>Website</span>
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              autoComplete="off"
              tabIndex="-1"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <div className="flex flex-col gap-2">
            <div ref={turnstileRef} />
            {turnstileError ? (
              <span className="text-[12px] text-red-400">
                Verification failed. Please refresh and try again.
              </span>
            ) : null}
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
