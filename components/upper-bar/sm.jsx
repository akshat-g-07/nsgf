"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function UpperBarSM() {
  const n = useTranslations("NAVBAR");
  return (
    <>
      <div className="w-full lg:flex justify-center bg-primary-foreground text-primary flex flex-row-reverse gap-x-4 px-2 py-1">
        <Link href={"contact"}>{n("contact")}</Link>
        <Link href={"blogs"}>{n("blogs")}</Link>
        <Link href={"subscribe"}>{n("subscribe")}</Link>
        <Link href={"donate"}>{n("donate")}</Link>
      </div>
    </>
  );
}
