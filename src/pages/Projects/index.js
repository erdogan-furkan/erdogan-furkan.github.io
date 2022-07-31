import { useState } from "react";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import Image1 from "../../assets/images/covid-tracker.png";
import Image2 from "../../assets/images/typing-speed.png";
import Image3 from "../../assets/images/text-generator.png";
import Image4 from "../../assets/images/notes.png";
import Image5 from "../../assets/images/rick-and-morty.png";
import Image6 from "../../assets/images/spend-money.png";
import Image7 from "../../assets/images/memory-game.png";
import Image8 from "../../assets/images/markdown-previewer.png";
import Image9 from "../../assets/images/forest-fire.png";
import Image10 from "../../assets/images/station-information.png";

const projectList = [
  {
    name: "Forest Fire Information System",
    description:
      "A web based GIS application with user system to watch forest fires.",
    image: Image9,
    prv: true,
  },
  {
    name: "Typing Speed App",
    description:
      "A react app with redux to test and practice your typing speed.",
    image: Image2,
    source: "https://github.com/erdogan-furkan/typing-speed-app",
    live: "https://typingspeed-app.netlify.app/",
  },
  {
    name: "Memory Game",
    description:
      "Web frameworks themed memory game. Your best score will be recorded.",
    image: Image7,
    source: "https://github.com/erdogan-furkan/memory-game",
    live: "https://frameworks-memory-game.netlify.app/",
  },
  {
    name: "Rick and Morty App",
    description:
      "It is an application in which you can search and filters Rick and Morty characters.",
    image: Image5,
    source: "https://github.com/erdogan-furkan/rick-and-morty-app",
    live: "https://rickandmortycharacters-app.netlify.app/",
  },
  {
    name: "Covid Tracker App",
    description: "A tracking app for tracking COVID-19 cases around the world.",
    image: Image1,
    source: "https://github.com/erdogan-furkan/covid-tracker-app",
    live: "https://app-covidtracker.netlify.app/",
  },
  {
    name: "Station Information System",
    description: "Basic web based GIS application to get information stations.",
    image: Image10,
    source: "https://gitlab.com/erdogan-furkan/durak-sorgulama-sistemi",
  },
  {
    name: "Markdown Previewer App",
    description: "A very simple but useful markdown previewer app.",
    image: Image8,
    source: "https://github.com/erdogan-furkan/markdown-previewer-app",
    live: "https://markdownpreviewer-app.netlify.app/",
  },
  {
    name: "Text Generator App",
    description: "Simple text generator app to generate random paragraphs.",
    image: Image3,
    source: "https://github.com/erdogan-furkan/text-generator-app",
    live: "https://textgenerator-app.netlify.app/",
  },
  {
    name: "Notes App",
    description:
      "Basic notes app with redux. The notes you add will not be lost even if you refresh the page.",
    image: Image4,
    source: "https://github.com/erdogan-furkan/notes-app",
    live: "https://reduxnotes-app.netlify.app/",
  },
  {
    name: "Spend Money App",
    description: "A clone application with redux to spend Bill Gates' money.",
    image: Image6,
    source: "https://github.com/erdogan-furkan/spend-money-app",
    live: "https://spendmoney-app.netlify.app/",
  },
];

function Projects() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader loading={loading} setLoading={setLoading} />
      ) : (
        <div className="pb-16 fadein">
          <h1 className="font-bold text-4xl p-4">Projects</h1>
          <hr className="border-2 dark:border-neutral-50/25" />
          <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {projectList.map((project, i) => (
              <Card key={i} {...project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
