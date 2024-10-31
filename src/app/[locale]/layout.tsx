import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Nav } from "@/components/nav";
import "@/styles/globals.css";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: "en" | "ar" };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages} >
          <div className="h-screen w-screen bg-background text-primary">
            <Nav />
            <div className="p-4">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
