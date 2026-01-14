import './globals.css'
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-poppins' })

export const metadata = {
  title: 'Ebenezer Nwikina | Front Developer', 
  description: 'The portfolio website of Ebenezer Nwikina, a Frontend Web Developer specializing in creating stunning and responsive web applications using modern technologies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter relative ">
                  {children}
      </body>
    </html>
  )
}
