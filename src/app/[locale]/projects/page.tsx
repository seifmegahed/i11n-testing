import { getTranslations } from "next-intl/server";

async function ProjectsPage() {
  const t = await getTranslations("projects");
  return (
    <main>
      <h1 className="text-3xl">{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}

export default ProjectsPage;