import React, { useCallback, useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { IoPulse } from "react-icons/io5";

import SplashScreen from "../splash-screen";
import useClientReady from "../../hooks/use-client-ready";

const prefersDarkTheme = () =>
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

const Layout = ({ metadata = {}, children }) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  const isClientReady = useClientReady();
  const [isDark, setIsDark] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth * 0.25,
    });
    setIsDark(prefersDarkTheme());
  }, []);

  const updateTheme = useCallback(() => {
    const nextIsDark = !prefersDarkTheme();
    document.body.classList.add("changing-theme");
    document.body.classList.toggle("dark", nextIsDark);
    document.body.classList.toggle("light", !nextIsDark);
    localStorage.theme = nextIsDark ? "dark" : "light";
    setIsDark(nextIsDark);
    window.setTimeout(
      () => document.body.classList.remove("changing-theme"),
      0,
    );
  }, []);

  return (
    <div>
      {splashVisible ? (
        <SplashScreen hideSplash={() => setSplashVisible(false)} />
      ) : (
        <div className="relative dark:bg-slate-900">
          {isClientReady && (
            <>
              <nav
                className="fixed left-0 top-0 z-10 w-full bg-white shadow-lg dark:bg-gray-900"
                aria-label="Site controls"
              >
                <ul className="absolute right-8 z-20 mt-6 flex items-center rounded-full bg-gray-200 px-5 py-2 uppercase shadow-md dark:bg-[#0d3040]">
                  <li className="list-none pr-6">
                    <button
                      type="button"
                      className="mr-1 inline-flex cursor-pointer items-center py-2 text-xs font-semibold text-gray-600 transition-transform duration-150 hover:scale-125 hover:text-black dark:text-gray-100 dark:hover:text-teal-300"
                      onClick={updateTheme}
                      aria-label={`Use ${isDark ? "light" : "dark"} theme`}
                    >
                      {isDark ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </button>
                  </li>
                  <li className="list-none">
                    <a
                      className="inline-flex items-center py-2 text-xs font-semibold text-gray-600 transition-transform duration-150 hover:scale-125 hover:text-black dark:text-gray-100 dark:hover:text-teal-300"
                      href={metadata.statusPage}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <IoPulse />
                      <span className="ml-2 whitespace-nowrap">
                        {metadata.statusPageContent}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>

              <div
                className="fixed right-0 top-32 z-0 hidden xl:block"
                style={{ width: dimensions.width, height: dimensions.height }}
                aria-hidden="true"
              >
                <svg
                  width={dimensions.width}
                  height={dimensions.height}
                  viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                >
                  <defs>
                    <pattern
                      id="home-pattern"
                      width="15"
                      height="15"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        width="4"
                        height="4"
                        className="text-gray-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={dimensions.width}
                    height={dimensions.height}
                    fill="url(#home-pattern)"
                  />
                </svg>
              </div>
            </>
          )}

          <main
            className="relative max-w-screen-xl p-8 xs:p-24"
            style={{
              width: isClientReady ? "75%" : "100%",
              marginRight: isClientReady ? "10%" : 0,
            }}
          >
            {children}
          </main>
        </div>
      )}
    </div>
  );
};

export default Layout;
