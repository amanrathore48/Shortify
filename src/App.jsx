import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import InputLink from "./components/InputLink";
import Navbar from "./components/Navbar";
import ShortenLink from "./components/ShortenLink";
import { LinkContext } from "./LinkContext";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";

function App() {
  const { shortenLinks } = useContext(LinkContext);
  console.log(shortenLinks);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="con">
        <Navbar />
        <HeroSection />
      </div>

      <div className="bg-slate-200 sm:pb-24 pb-10">
        <div className="relative">
          <div className="con pt-4">
            <InputLink />
            <div className="sm:mt-24 mt-36 flex flex-col gap-5">
              <AnimatePresence>
                {shortenLinks.length !== 0 &&
                  shortenLinks.map((item) => (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                    >
                      <ShortenLink
                        realLink={item.realLink}
                        shortenLink={item.shortenLink}
                      />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            <FeatureSection />
          </div>
        </div>
      </div>

      <div className="bg-cross bg-ng">
        <FooterBanner />
      </div>
      <div className="bg-zinc-900 bg-texture">
        <div className="con">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
