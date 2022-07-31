import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import useDarkMode from "../../hooks/useDarkMode";

function Loader({ loading, setLoading }) {
  const [enabled] = useDarkMode();

  const options = {
    color: enabled ? "#ffffff" : "#000000",
    cssOverride: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "50%",
      margin: "0 auto",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      return setLoading(false);
    }, 1500);
  }, [setLoading]);

  return <HashLoader {...options} loading={loading} />;
}

export default Loader;
