import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Card({ name, description, image, source, live, prv }) {
  return (
    <div className="flex flex-col justify-between max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800 dark:border-neutral-900">
      <div>
        <img className="rounded-t-lg" src={image} alt={name} />
        <div className="p-5">
          <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <div className="text-right pb-4 pr-4">
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="p-2 transition duration-500 hover:bg-neutral-800 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="p-2 transition duration-500 hover:bg-neutral-800 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800"
          >
            Live <FontAwesomeIcon icon={faArrowRight} />
          </a>
        )}
        {prv && "Private repository"}
      </div>
    </div>
  );
}

export default Card;
