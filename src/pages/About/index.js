import { useState } from "react";
import Loader from "../../components/Loader";
import Profile from "../../assets/images/profile.jpg";
import Spinner from "../../components/Spinner";

function About() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader loading={loading} setLoading={setLoading} />
      ) : (
        <div className="pb-16 fadein">
          <h1 className="font-bold text-4xl p-4">About me</h1>
          <hr className="border-2 dark:border-neutral-50/25" />
          {!Profile ? (
            <Spinner color="fill-neutral-600" />
          ) : (
            <img
              src={Profile}
              alt="Profile"
              className="rounded-full w-64 p-4 mx-auto grayscale"
            />
          )}

          <p className="text-left p-4">
            Hello again, my name is Furkan and I am 23. I have completed my
            bachelor's degree in Geomatics Engineering from Istanbul Technical
            University. I have been working on web development for about a year.
            I took the first step into the web world by developing web based gis
            applications. After this first step, web development became the
            center of my life and I decided to continue my career in this
            direction. To view my resume please click
            <a
              href="https://drive.google.com/file/d/1GbuG2FhAQ9wIfNU3eyulsdOaYS0LF5Vw/view"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >
              {" "}
              here
            </a>
            .
          </p>
        </div>
      )}
    </>
  );
}

export default About;
