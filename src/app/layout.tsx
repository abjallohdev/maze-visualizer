import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maze Visualizer',
  description: 'App for maze visualization',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}
