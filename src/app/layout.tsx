import './globals.css'
import Header from '../components/header'
import Providers from "@/app/Providers";
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'top 250 movies',
  description: 'top 250 movies from IMBD api ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header/>
        <Navbar/>
        <main>
        {children}</main></Providers></body>
    </html>
  )
}
