import Image from "next/image";
import { Kings } from "next/font/google";

const kings = Kings({
  weight: "400",
});

export default function Logo({ size = "md" }) {
  const imageSize = size === "md" ? 100 : 200;
  const fontSize = size === "md" ? "xl" : "2xl";
  return (
    <>
      <div className="flex flex-col items-center py-2">
        <div className="aspect-square font-bold flex items-center align-center w-fit">
          <Image
            src="/logo.png"
            alt="logo"
            width={imageSize}
            height={imageSize}
          />
        </div>
        {/* TODO: write better */}
        <p className={`${kings.className} text-center text-${fontSize}`}>
          NSG
          <br />
          Foundation
        </p>
      </div>
    </>
  );
}
