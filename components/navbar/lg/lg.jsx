import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function LG() {
  const n = await getTranslations("NAVBAR");
  return (
    <>
      <div className="size-full *:w-full *:flex">
        <div className="flex-row gap-x-6 font-semibold text-lg px-4">
          <Link href={"home"}>{n("home")}</Link>
          <Link href={"about"}>{n("about")}</Link>
          <Link href={"members"}>{n("members")}</Link>
          <Link href={"events"}>{n("events")}</Link>
          <Link href={"gallery"}>{n("gallery")}</Link>
          <Link href={"sponsors"}>{n("sponsors")}</Link>
        </div>
      </div>
    </>
  );
}
