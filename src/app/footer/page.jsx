import "../globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faList } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    return(
    <>
      <footer className="h-[15vh] w-screen flex justify-evenly items-center bg-black">
          <Link href="./home" className="h-full w-full grid grid-cols-1 grid-rows-2 place-items-center gap-2 bg-black hover:bg-slate-950 group">
            <FontAwesomeIcon icon={faHouse} className="h-6 w-6 text-white  group-hover:text-red-600" />
            <p className="text-white hover:text-red-600 text-xl font-semibold group-hover:text-red-600">Home</p>
          </Link>

          <Link href="./myorder" className="h-full w-full grid grid-cols-1 grid-rows-2 place-items-center gap-2 bg-black hover:bg-slate-950 group">
            <FontAwesomeIcon icon={faList} className="h-6 w-6 text-white  group-hover:text-red-600" />
            <p className="text-white hover:text-red-600 text-xl font-semibold group-hover:text-red-600">My order</p>
          </Link>

          {/* <Link href="#" className="h-full w-full grid grid-cols-1 grid-rows-2 place-items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-white" />
            <p className="text-white text-xl font-semibold">Account</p>
          </Link> */}
        </footer>
    </>
    );
}