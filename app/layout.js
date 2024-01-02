import { Inter } from 'next/font/google'
import styles from './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'huh huh?',
  description: 'This is the official tech syndicate website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
