import { useRouter } from "next/router";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  const { route } = useRouter();
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: true,
        multiplier: -1,
        resetNativeScroll: false,
      }}
      watch={[route]}
      containerRef={containerRef}
    >
      <div data-scroll-container>
        <Component {...pageProps} />;
      </div>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
