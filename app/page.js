import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";

function page() {
  return (
    <div className=" ">
      <div className="p-5 fixed bottom-28 flex flex-col items-center justify-center mx-auto   w-full ">
        <div className="bg-neutral-600  ">
          <Image
            height={1000}
            width={1000}
            className="object-cover w-fit"
            src="/chin.png"
            alt=""
          />
        </div>
        <h1 className="font-RubikExtraBold text-6xl text-center   my-9 btn-shine">
          Cookiietoo Design
        </h1>

        <p className="text-neutral-400 lg:max-w-lg text-center font-RubikRegular ">
        Cookiietoo is the design practice of Nilesh Chhipa.I help brands express their unique voice through identity-driven products, experiences, and design systems.
        </p>
      </div>

      <div className=" flex justify-center">
        <div className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
          <Link href={"/dashboard"}>
            
            <span>
              <PiHouseLight className="text-2xl text-white  " />
            </span>
          </Link>
          <span>
            <PiGithubLogoLight className="flex text-2xl items-center justify-center" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default page;
