# I18n Testing

Playground to test i18n in Next.js.
English and Arabic support with LTR and RTL directionality.

## Steps

1. Install dependencies

```bash
pnpm install
```

2. Install `next-intl`

```bash
pnpm install next-intl
```

3. Setup translation files

In the root directory, create a `messages` directory and create two files:

- `en.json`
- `ar.json`

```json
{
  "hello": "Hello",
  "projects": "Projects"
}
```

```json
{
  "hello": "مرحبا",
  "projects": "مشاريع"
}
```

4. Configure middleware

```ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const supportedLocales = ['en', 'ar'];
  const defaultLocale = 'en';

  // Check if the path includes a supported locale
  const locale = supportedLocales.find((loc) => pathname.startsWith(`/${loc}`));

  if (!locale) {
    // Redirect to the default locale if none is found
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
```



## License

MIT