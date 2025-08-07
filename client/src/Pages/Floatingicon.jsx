import React from "react";
import FacebookIcon from "@/assets/logo/facebook.png";
import InstagramIcon from "@/assets/logo/instagram.png";
import LinkedinIcon from "@/assets/logo/youtube.png";

const SocialSidebar = () => {
  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: FacebookIcon,
      alt: "Facebook",
    },
    {
      href: "https://instagram.com",
      icon: InstagramIcon,
      alt: "Instagram",
    },
    {
      href: "https://linkedin.com",
      icon: LinkedinIcon,
      alt: "LinkedIn",
    },
  ];

  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4 bg-white shadow-lg rounded-l-lg px-2 py-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-[#48b06c]/10 rounded-full transition"
          >
            <img
              src={social.icon}
              alt={social.alt}
              className="w-5 h-5 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
