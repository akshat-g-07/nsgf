import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function UpperBarLG() {
  const n = await getTranslations("NAVBAR");
  return (
    <>
      <div className="hidden w-full lg:flex justify-center bg-primary-foreground text-primary">
        <div className="max-w-7xl w-full flex flex-row-reverse gap-x-4 px-4 py-1">
          <Link href={"contact"}>{n("contact")}</Link>
          <Link href={"blogs"}>{n("blogs")}</Link>
          <Link href={"subscribe"}>{n("subscribe")}</Link>
          <Link href={"donate"}>{n("donate")}</Link>
        </div>
      </div>
    </>
  );
}
