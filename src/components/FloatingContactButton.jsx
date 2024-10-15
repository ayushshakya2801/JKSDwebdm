import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function FloatingContactButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link to="/contact"> {/* Specify the route to navigate */}
        <button className="flex items-center bg-[#ffa75c] text-white hover:bg-[#ff8c42] py-3 px-4 rounded-full shadow-lg border border-[#ffa75c]">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default FloatingContactButton;
