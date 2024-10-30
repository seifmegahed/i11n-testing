"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Link } from "@/i18n/routing";

export const Nav = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav-bar");

  const switchLocale = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <nav className="flex w-full justify-between bg-muted p-4">
      <ul className="flex gap-10 w-fit">
        <li className={`w-1/2 min-w-fit text-xl ${pathname === "/" ? "font-bold" : ""}`}>
          <Link href="/">{t("home")}</Link>
        </li>
        <li
          className={`w-1/2 min-w-fit text-xl ${pathname === "/projects" ? "font-bold" : ""}`}
        >
          <Link href="/projects">{t("projects")}</Link>
        </li>
      </ul>
      <div>
        <button onClick={() => switchLocale(locale === "en" ? "ar" : "en")}>
          {locale === "en" ? "Ar" : "En"}
        </button>
      </div>
    </nav>
  );
};
