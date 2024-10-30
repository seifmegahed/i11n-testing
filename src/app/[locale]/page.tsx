import { getTranslations } from "next-intl/server";

async function HomePage() {
  const t = await getTranslations("home-page");
  return (
    <main>
      <h1 className="text-3xl">{t("title")}</h1>
      <p>{t("description")}</p>
    </main>
  );
}

export default HomePage;
