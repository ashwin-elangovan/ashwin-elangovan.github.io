import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="../../fonts/MabryPro-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />
    // <meta
    //   key="viewport"
    //   name="viewport"
    //   content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
    // />
    // <meta
    //   key="zoom"
    //   name="zoom"
    //   content="width=device-width, initial-scale=0.9, maximum-scale=0.9, minimum-scale=0.9, user-scalable=no, viewport-fit=cover"
    // />,
    // <link
    //   rel="preload"
    //   href="/fonts/anonima.woff"
    //   as="font"
    //   type="font/woff"
    //   crossOrigin="anonymous"
    //   key="interFont"
    // />,
    // <link
    //   rel="preload"
    //   href="/fonts/gilland.woff"
    //   as="font"
    //   type="font/woff"
    //   crossOrigin="anonymous"
    //   key="interFont"
    // />,
  ])
}
