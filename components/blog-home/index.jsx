import { getTranslations } from "next-intl/server";
import BlogCard from "@/components/blog-card";

export default async function BlogHome() {
  const t = await getTranslations("HOME");
  const blogContent = t.raw("blog-content");
  const blogData = Array.isArray(blogContent) ? blogContent : [];

  return (
    <>
      <section className="parentContainer">
        <div className="px-4 space-y-2">
          <div className="text-3xl lg:text-5xl font-bold">
            {t("blog-title")}
          </div>
          <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4">
            {blogData.map((data) => (
              <BlogCard {...data} key={data.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
