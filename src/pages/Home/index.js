import Typed from "typed.js";
import { useEffect, useState, useRef } from "react";
import Loader from "../../components/Loader";
import "./styles.css";

function Home() {
  const el = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const typed = new Typed(el.current, {
        strings: [
          "Hello, I'm Furkan",
          "Hello, I'm a Geomatics Engineer",
          "Hello, I'm a Junior Web Developer",
        ],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [loading]);

  return (
    <div className="flex items-center justify-center h-screen -mt-14">
      <Loader loading={loading} setLoading={setLoading} />

      <div>
        <span ref={el} className="font-bold text-4xl"></span>
      </div>
    </div>
  );
}

export default Home;
