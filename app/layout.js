export const metadata = {
  title: 'Witaj',
  description: 'Prosta strona Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}