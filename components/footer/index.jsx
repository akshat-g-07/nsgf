import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Logo from "@/components/logo";

export default async function Footer() {
  const n = await getTranslations("NAVBAR");
  return (
    <>
      <footer className="parentContainer bg-orange-200 text-secondary-foreground mt-6">
        <div className="flex flex-row border-b-2 border-white py-4">
          <Logo size="lg" />
          <div className="justify-center lg:justify-start gap-x-36 flex flex-row pl-28 flex-auto text-2xl font-semibold">
            <div className="flex flex-col gap-y-2">
              <Link>Our Mission</Link>
              <Link>{n("about")}</Link>
              <Link>{n("events")}</Link>
              <Link>Gallery</Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <Link>Donate</Link>
              <Link>Contact Us</Link>
              <Link>Blogs</Link>
              <Link>Subscribe</Link>
            </div>
          </div>
        </div>
        <div className="w-fit! flex flex-col items-center py-4">
          <p>© 1999 - 2026 NSG Foundation.</p>
          <p>All Rights Reserved.</p>
          <p>
            <span className="border-r-1 border-white px-1 mx-1">
              <Link href={"terms-and-conditions"}>Terms & Conditions</Link>
            </span>
            <span>
              <Link href={"privacy-policy"}>Privacy Policy</Link>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
