import React, { useState } from "react";
import { BiLinkExternal as IconImageLink } from "react-icons/bi";
import { FaLink as IconExternalLink } from "react-icons/fa6";

import asuImgDark from "../../images/asu-dark.png";
import asuImgLight from "../../images/asu-light.png";
import freshworksImgDark from "../../images/freshworks-dark.png";
import freshworksImgLight from "../../images/freshworks-light.png";
import freshCallerImg from "../../images/sectionImages/freshworks/intern/freshcaller.jpeg";
import routingAutomationImg from "../../images/sectionImages/freshworks/se/routing_automation.jpeg";
import slmImg from "../../images/sectionImages/freshworks/se/slm.jpg";
import voicebotImg from "../../images/sectionImages/freshworks/se/voicebot.jpeg";
import redisCacheImg from "../../images/sectionImages/freshworks/sse/redis_cache.jpeg";
import sharedCallerImg from "../../images/sectionImages/freshworks/sse/shared_caller.jpeg";
import useClientReady from "../../hooks/use-client-ready";

const experienceImages = {
  "Software Engineer": [
    [
      voicebotImg,
      "https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/voicebot/",
    ],
    [
      routingAutomationImg,
      "https://www.freshworks.com/freshcaller-cloud-pbx/call-center-setup/automated-call-routing/",
    ],
    [
      slmImg,
      "https://www.freshworks.com/freshcaller-cloud-pbx/call-center-management/service-level-monitoring/",
    ],
  ],
  "Senior Software Engineer": [
    [redisCacheImg, "https://www.ashwinelangovan.com/multilevel-cache-report/"],
    [
      sharedCallerImg,
      "https://support.freshdesk.com/en/support/solutions/articles/50000003828-sharing-freshcaller-account-between-omnichannel-and-freshworks-crm",
    ],
  ],
  "Product Development Intern": [
    [freshCallerImg, "https://www.freshcaller.com/"],
  ],
};

const titleImages = {
  asu: [asuImgLight, asuImgDark],
  freshworks: [freshworksImgLight, freshworksImgDark],
};

const SummaryItem = ({
  source,
  titleName,
  titleTime,
  link,
  descriptionBullets = [],
  titleImage,
  sectionTags = [],
}) => {
  const isClientReady = useClientReady();
  const [hoveredImage, setHoveredImage] = useState(null);
  const logoImages = titleImages[titleImage];
  const galleryImages = experienceImages[titleName] ?? [];
  const isProject = source === "Projects";

  return (
    <article className="mb-2">
      {logoImages && (
        <div className="flex items-center justify-center pb-6 pt-1 text-center">
          <a
            className={
              isClientReady ? "w-full max-w-[25%]" : "w-full max-w-[60%]"
            }
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="block transition-transform duration-150 hover:scale-125 dark:hidden"
              src={logoImages[0]}
              alt={titleName}
            />
            <img
              className="hidden transition-transform duration-150 hover:scale-125 dark:block"
              src={logoImages[1]}
              alt={titleName}
            />
          </a>
        </div>
      )}

      <div className="group rounded hover:bg-gray-200 dark:hover:bg-slate-800">
        <div className={isClientReady ? "px-12 py-6" : "px-4 py-6"}>
          <div
            className={`${isClientReady ? "flex justify-between text-justify" : "flex flex-col text-center"} text-gray-600 group-hover:text-black dark:text-gray-200 dark:group-hover:text-teal-300`}
          >
            <div className={isProject && isClientReady ? "w-10/12" : ""}>
              {isProject && link ? (
                <a
                  className="inline-flex items-baseline gap-2 font-bold hover:text-black dark:hover:text-teal-300"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconExternalLink />
                  <span>{titleName}</span>
                </a>
              ) : (
                <span className="text-lg font-semibold">{titleName}</span>
              )}
            </div>
            <div
              className={`${isClientReady ? "font-light" : "mt-3 font-light"} ${isProject && isClientReady ? "flex w-2/12 justify-end" : ""}`}
            >
              {titleTime}
            </div>
          </div>

          {sectionTags.length > 0 && (
            <ul
              className={`mt-1 flex flex-wrap ${isClientReady ? "" : "justify-center"}`}
              aria-label="Technologies used"
            >
              {sectionTags.map((tag) => (
                <li
                  key={tag}
                  className="mb-1 mr-1.5 mt-1 rounded-full bg-black/10 px-3 py-1 text-xs font-medium leading-5 text-slate-900 dark:bg-teal-400/10 dark:text-teal-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}

          {descriptionBullets.length > 0 && (
            <ul>
              {descriptionBullets.map(({ content }) => (
                <li
                  key={content}
                  className="list-disc pt-2 text-justify font-light text-gray-600 group-hover:text-black dark:text-gray-400 dark:group-hover:text-slate-200"
                >
                  {content}
                </li>
              ))}
            </ul>
          )}

          {galleryImages.length > 0 && (
            <div className="mb-3 mt-4 flex flex-wrap gap-4 py-3">
              {galleryImages.map(([image, url], index) => (
                <a
                  key={url}
                  className="relative"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img
                    src={image}
                    alt={`${titleName} project ${index + 1}`}
                    className="h-20 w-[150px] rounded border-2 border-slate-800/10 object-cover transition dark:border-slate-800"
                    style={{ opacity: hoveredImage === index ? 1 : 0.7 }}
                  />
                  {hoveredImage === index && (
                    <span
                      className="absolute right-0 top-0 bg-gray-500/70 p-1"
                      aria-hidden="true"
                    >
                      <IconImageLink />
                    </span>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default SummaryItem;
