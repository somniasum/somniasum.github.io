import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fb_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-ibm-mono)]">
        <main>
          {" "}
          &apos;zhad&apos;; selves transversing life facilitated by the noetic
          core.
        </main>
      </div>
      <Footer />
    </>
  );
}
