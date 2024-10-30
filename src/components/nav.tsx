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
    <nav className="flex w-full justify-between bg-muted/50 shadow-sm text-muted-foreground">
      <ul className="flex w-fit">
        <Link href="/">
          <li
            className={`w-1/2 min-w-fit p-4 text-xl transition-all duration-300 ease-in-out hover:bg-muted-foreground/20 ${pathname === "/" ? "bg-muted-foreground/20" : ""}`}
          >
            {t("home")}
          </li>
        </Link>
        <Link href="/projects">
          <li
            className={`w-1/2 min-w-fit p-4 text-xl transition-all duration-300 ease-in-out hover:bg-muted-foreground/20 ${pathname === "/projects" ? "bg-muted-foreground/20" : ""}`}
          >
            {t("projects")}
          </li>
        </Link>
      </ul>
      <div>
        <button
          onClick={() => switchLocale(locale === "en" ? "ar" : "en")}
          className="flex h-full items-center justify-center py-4 px-8 text-xl transition-all duration-300 ease-in-out hover:bg-muted-foreground/20 font-bold"
        >
          {locale === "en" ? "ع" : "En"}
        </button>
      </div>
    </nav>
  );
};
