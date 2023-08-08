/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { useLanguageContext } from "./LanguageContext";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { language } = useLanguageContext();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_89an2yq",
        "template_50el526",
        formRef.current!,
        "BKWmXHHO7TelC11Tu"
      )
      .then(
        () => {
          setLoading(false);
          {
            language === "en"
              ? alert("Thank you. I will get back to you as soon as possible.")
              : alert(
                  "Gracias. Me pondré en contacto contigo lo antes posible."
                );
          }

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          {
            language === "en"
              ? alert("Ahh, something went wrong. Please try again.")
              : alert("Ahh, algo salió mal. Por favor, inténtelo de nuevo.");
          }
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {language === "en" ? (
          <>
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
          </>
        ) : (
          <>
            <p className={styles.sectionSubText}>Ponte en contacto</p>
            <h3 className={styles.sectionHeadText}>Contacto.</h3>
          </>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {" "}
              {language === "en" ? "Your Name" : "Tu nombre"}{" "}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              {...(language === "en" && {
                placeholder: "What's your name?",
              })}
              {...(language === "es" && {
                placeholder: "¿Cuál es tu nombre?",
              })}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {language === "en" ? "Your Email" : "Tu email"}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              {...(language === "en" && {
                placeholder: "What's your email?",
              })}
              {...(language === "es" && {
                placeholder: "¿Cuál es tu email?",
              })}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {language === "en" ? "Your Message" : "Tu mensaje"}
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              {...(language === "en" && {
                placeholder: "What you want to say?",
              })}
              {...(language === "es" && {
                placeholder: "¿Qué quieres decir?",
              })}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading
              ? language === "en"
                ? "Sending..."
                : "Enviando..."
              : language === "en"
              ? "Send"
              : "Enviar"}
          </button>
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
