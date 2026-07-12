import { Link } from "gatsby";
import React, { useState } from "react";
import { AiFillFile as IconResume } from "react-icons/ai";
import { BiLogoInstagramAlt as IconInstagram } from "react-icons/bi";
import {
  IoLogoGithub as IconGithub,
  IoLogoLinkedin as IconLinkedin,
} from "react-icons/io5";
import { useScramble } from "use-scramble";

import backgroundImage from "../../images/popup_image.png";
import foregroundImage from "../../images/profile_picture.jpg";
import profileImg from "../../images/profile.jpeg";
import sign from "../../images/sign.png";
import useClientReady from "../../hooks/use-client-ready";

const socialLinkClass =
  "inline-flex items-center py-2 font-semibold text-sm text-gray-600 hover:text-black dark:text-gray-100 dark:hover:text-teal-300 transform transition-all duration-150 hover:scale-150";

const Header = ({ metadata = {} }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const isClientReady = useClientReady();
  const { ref, replay } = useScramble({ text: metadata.name, speed: 0.6 });

  return (
    <header className="mb-6 block md:flex">
      {isClientReady ? (
        <div className="mt-[-30px] max-w-250">
          <div className="card">
            <div className="wrapper">
              <img
                src={foregroundImage}
                className="cover-image"
                alt="Ashwin Elangovan"
              />
            </div>
            <img
              src={sign}
              className="title"
              alt="Ashwin Elangovan signature"
            />
            <img
              src={backgroundImage}
              className="background-image"
              alt="Ashwin Elangovan"
            />
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-150">
          <Link to="/">
            <img
              className="rounded-full"
              src={profileImg}
              alt={metadata.name}
            />
          </Link>
        </div>
      )}

      <div
        className={`flex flex-1 flex-col items-center justify-center pt-6 md:pl-20 md:pt-1 ${isClientReady ? "" : "mobile-center"}`}
      >
        <h1>
          <button
            ref={ref}
            type="button"
            className="bg-gradient-to-r from-black to-gray-100 bg-clip-text text-left text-7xl font-bold leading-tight text-transparent drop-shadow-[0_2px_2px_rgba(236,8,8,0.9)] hover:text-black focus:outline-none dark:from-white dark:to-gray-700 dark:text-transparent dark:hover:text-blue-200"
            onMouseEnter={replay}
            onFocus={replay}
            aria-label="Replay name animation"
          >
            {metadata.name}
          </button>
        </h1>
        <p className="pt-2 italic text-gray-600 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] dark:text-gray-300">
          {metadata.description}
        </p>

        <ul className="mt-6 uppercase">
          {[
            [metadata.github, <IconGithub key="github" />, "GitHub"],
            [metadata.linkedin, <IconLinkedin key="linkedin" />, "LinkedIn"],
            [
              metadata.instagram,
              <IconInstagram key="instagram" />,
              "Instagram",
            ],
          ].map(([url, icon, label]) =>
            url ? (
              <li className="inline list-none pr-5" key={label}>
                <a
                  className={socialLinkClass}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            ) : null,
          )}

          {metadata.professionalResume && (
            <li className="relative inline list-none pr-5">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center py-2 text-sm font-semibold text-gray-600 transition-transform duration-150 hover:scale-125 hover:text-black dark:text-gray-100 dark:hover:text-teal-300"
                onClick={() => setIsResumeOpen((open) => !open)}
                aria-expanded={isResumeOpen}
              >
                <IconResume />
                <span className="ml-2">{metadata.resumeContent}</span>
              </button>
              {isResumeOpen && (
                <div className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 rounded border border-gray-600 bg-white p-3 text-gray-600 shadow-md dark:border-white dark:bg-slate-900 dark:text-gray-300">
                  <a
                    className="block px-4 py-2 text-center text-xs hover:text-black dark:hover:text-teal-200"
                    href={metadata.professionalResume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {metadata.professionalResumeContent}
                  </a>
                  <a
                    className="block px-4 py-2 text-center text-xs hover:text-black dark:hover:text-teal-200"
                    href={metadata.fullResume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {metadata.fullResumeContent}
                  </a>
                </div>
              )}
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
