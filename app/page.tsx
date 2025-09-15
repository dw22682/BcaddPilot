import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="bg-[#131313]">
      <header>
        <p className="text-white">Bcadd Pilot hosted on github pages</p>
      </header>
      <main className="items-center bg-[#131313]">
        <h1 className="text-center text-white">Bcadd Pilot</h1>
        <div className="grid grid-cols-2 items-center justify-items-center px-5 py-5">
          <Link href="/bcaddPilotTest-0.1.1.exe" download="bcadd-no-storage.exe">
            <button className="py-3 px-5 text-amber-50 border-white border hover:text-blue-400">
              Download No Storage
            </button>
          </Link>
          <Link href="/bcaddPilotTest-0.3.0.exe" download="bcadd-pilot.exe">
            <button className="py-3 px-5 text-amber-50 border-white border hover:text-blue-400">
              Download Latest Version
            </button>
          </Link>
        </div>
        <div>
          <p className="text-white px-4 py-5">
            reminder that this is just a pilot and can have errors.
            please report any errors to:
            nlaurence@nhs.net
          </p>
        </div>
      </main>
    </div>
  );
}
