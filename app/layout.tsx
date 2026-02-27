import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const isProduction = process.env.NODE_ENV === 'production'

export const metadata: Metadata = {
  title: 'Polese Audiovisual | Vídeos para Reels | Vídeos para Instagram',
  description:
    'Tenha vídeos profissionais para o seu negócio, mostrando autoridade e a qualidade que você tem a entregar',
  authors: [{ name: '@poleseaudiovisual' }],
  alternates: {
    canonical: 'https://www.poleseaudiovisual.com.br',
  },
  openGraph: {
    title: 'Polese Audiovisual',
    siteName: 'Polese Audiovisual',
    description:
      'Produção de vídeos em Curitiba e região. Gravação de vídeo e edição de vídeo. Vídeos profissionais!',
    url: 'https://www.poleseaudiovisual.com.br',
    type: 'website',
    images: [
      {
        url: 'https://www.poleseaudiovisual.com.br/images/logo_fundo_preto.png',
      },
    ],
  },
  icons: {
    icon: '/Logo_ico.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        {isProduction ? (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-THF2PK9K"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}

        {children}

        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87LS98MQ9V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-87LS98MQ9V');`}
        </Script>

        {isProduction ? (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-THF2PK9K');`}
          </Script>
        ) : null}
      </body>
    </html>
  )
}
