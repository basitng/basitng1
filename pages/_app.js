import { useRouter } from "next/router";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null);
  const { route } = useRouter();
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      watch={[route]}
      containerRef={containerRef}
    >
      <main data-scroll-container>
        <Component {...pageProps} />;
      </main>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
