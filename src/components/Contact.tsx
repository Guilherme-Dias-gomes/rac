import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IconType } from "react-icons";

type SocialIconProps = {
  Icon: IconType;
  href: string;
  label: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-block p-3 bg-gradient-to-r from-principal to-pink-800 rounded-full text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
    aria-label={label}
  >
    <Icon className="text-2xl group-hover:animate-pulse" />
    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {label}
    </span>
  </a>
);

const ContactSection: React.FC = () => {
  const socialLinks: SocialIconProps[] = [
    {
      Icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Follow us on Facebook",
    },
    {
      Icon: FaTwitter,
      href: "https://twitter.com",
      label: "Follow us on Twitter",
    },
    {
      Icon: FaLinkedinIn,
      href: "https://linkedin.com",
      label: "Connect on LinkedIn",
    },
    {
      Icon: FaInstagram,
      href: "https://instagram.com",
      label: "Follow us on Instagram",
    },
    {
      Icon: FaYoutube,
      href: "https://youtube.com",
      label: "Subscribe on YouTube",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto text-center pt-5 shadow-2xl shadow-white rounded-3xl bg-white/50 dark:bg-black/50">
        <h2 className="text-3xl font-extrabold text-principal dark:text-white sm:text-5xl mb-8">
          Entre em contato
        </h2>
        <p className="text-2xl font-bold text-principal dark:text-white mb-10">
          Estamos sempre com energia total para levar ENERGIA até você.
        </p>
        <div className="flex justify-center gap-3 mb-12">
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} {...link} />
          ))}
        </div>
        <div className="bg-gray-200 p-8 rounded-lg shadow-md dark:bg-principal">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">
            Let&apos;s Connect!
          </h3>
          <p className="text-gray-600 mb-6 dark:text-white">
            We&apos;d love to hear from you. Reach out to us on any of our social platforms or use the contact form below to get in touch.
          </p>

          <form className="space-y-4 ">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-principal to-pink-800 text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
