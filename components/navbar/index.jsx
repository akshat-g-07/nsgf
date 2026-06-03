import SM from "@/components/navbar/sm/sm";
import LG from "@/components/navbar/lg/lg";
import Logo from "@/components/logo";
import UpperBarLG from "@/components/upper-bar/lg";

export default async function Navbar() {
  // TODO: add a dropdown for language change, like isha
  // TODO: add icons for words
  // TODO: lighten the blue background of nav barÍ
  return (
    <nav className="w-full flex flex-col items-center">
      <UpperBarLG />
      <div className="size-full flex justify-center">
        <div className="w-full max-w-7xl flex flex-row justify-between lg:justify-normal px-4 items-center">
          <Logo />
          <div className="lg:hidden">
            <SM />
          </div>
          <div className="hidden lg:block flex-auto pl-4">
            <LG />
          </div>
        </div>
      </div>
    </nav>
  );
}
