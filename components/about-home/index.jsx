import { getTranslations } from "next-intl/server";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";

export default async function AboutHome() {
  const t = await getTranslations("HOME");
  return (
    <>
      {/* TODO: add image like khelo india */}
      {/* TODO: and check for moboile view too, its different */}
      <section className="parentContainer">
        <div className="h-fit px-4 space-y-4">
          <div className="text-7xl font-bold">{t("about-title")}</div>
          <div className="text-secondary-foreground w-7/11 text-zinc-600 text-3xl">
            {t("about-details")}
          </div>
          <Button className={"rounded-sm"} size="lg">
            <Link href={"about"}>Learn More</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
