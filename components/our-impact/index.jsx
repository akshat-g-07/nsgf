import { CircleCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function OurImpact() {
  const t = await getTranslations("HOME");
  const impactPoints = t.raw("impact-points");
  const impactPointsArray = Array.isArray(impactPoints) ? impactPoints : [];
  return (
    <>
      <section className="parentContainer">
        <div className="h-fit px-4 space-y-4">
          <div className="text-7xl font-bold">{t("impact-title")}</div>
          <div className="font-semibold text-3xl text-zinc-600 mt-4 mb-10">
            {t("impact-details")}
          </div>
          <div className="text-secondary-foreground space-y-10">
            {impactPointsArray.map((item) => (
              <div key={item} className="flex space-x-2 flex-row text-3xl">
                <p className="text-green-500 pt-0.5">
                  <CircleCheck size={40} />
                </p>
                <p>
                  <span className="font-semibold">{item.title}:</span>{" "}
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
