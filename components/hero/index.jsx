import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("HOME");
  return (
    <>
      {/* TODO: add background image like khelo india */}
      <section className="parentContainer bg-red-500 h-200 flex-col-reverse!">
        <div className="h-2/3 space-y-4 px-4">
          <h1 className="text-5xl lg:text-7xl font-bold">{t("title")}</h1>
          <h3 className="text-3xl lg:text-5xl font-bold">{t("intro")}</h3>
        </div>
      </section>
    </>
  );
}
