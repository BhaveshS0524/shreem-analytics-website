import '../styles/globals.css'

export const metadata = {
  title: 'Shreem Analytics',
  description: 'AI-Powered Business Analytics for Gujarat SMEs'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}