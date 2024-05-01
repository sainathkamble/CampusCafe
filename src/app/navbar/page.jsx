import "../globals.css";

export default function Navbar(){
    return(
    <>
     <nav className="h-[15vh] w-screen bg-red-600 grid grid-cols-1 grid-rows-2 place-items-center gap-4 p-4">
          <p className="text-white text-4xl font-bold">Campus Cafe</p>
          <p className="text-white text-xl font-bold">Browse Menu</p>
     </nav>
    </>
    );
}