import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("ABOUT");
  return (
    <>
      <section className="parentContainer mt-10 mb-40">
        <div className="px-4 space-y-2">
          <div className="text-7xl font-bold">{t("title")}</div>
          <div className="whitespace-pre-line text-secondary-foreground w-7/11 text-zinc-600 text-3xl">
            {t("details")}
          </div>
        </div>
      </section>
    </>
  );
}
