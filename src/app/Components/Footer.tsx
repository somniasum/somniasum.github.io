import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fas, fab);

export default function Footer() {
  return (
    <footer className="fixed bottom-2 left-0 w-full flex items-center justify-center gap-6 p-1 pb-2 ">
      <Link
        href="https://x.com/somniasum"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="invisible text-xs">socs</p>
        <FontAwesomeIcon icon={faXTwitter} size="xs" />
      </Link>
      <Link
        href="https://instagram.com/somniasum"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="invisible text-xs">socs</p>
        <FontAwesomeIcon icon={faInstagram} size="xs" />
      </Link>
      <Link href="mailto:somniasum@gmail.com">
        <p className="invisible text-xs">socs</p>
        <FontAwesomeIcon icon={faEnvelope} size="xs" />
      </Link>
    </footer>
  );
}
