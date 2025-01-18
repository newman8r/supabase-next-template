import './globals.css'

export const metadata = {
  title: 'Ocean Breeze Demo',
  description: 'A peaceful, ocean-themed demo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
