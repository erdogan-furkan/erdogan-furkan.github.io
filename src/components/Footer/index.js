import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="w-full absolute bottom-0 border-t-4 dark:border-t-neutral-50/25 dark:text-white">
      <div className="container w-full flex items-center justify-center space-x-4 h-14">
        <a href="https://github.com/erdogan-furkan">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/erdoganfurkan">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <p>Created by Furkan Erdoğan</p>
      </div>
    </nav>
  );
}

export default Navbar;
