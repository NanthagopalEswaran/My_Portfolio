import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap',
})

export const metadata = {
    title: 'Nanthagopal — Gen AI Developer & Tech Lead',
    description: 'Portfolio of Nanthagopal — Gen AI Developer passionate about creating useful and intelligent systems. Specializing in Python, Gen AI, and LabVIEW.',
    keywords: ['Gen AI', 'Python', 'LabVIEW', 'Tech Lead', 'AI Developer', 'Portfolio'],
    openGraph: {
        title: 'Nanthagopal — Gen AI Developer & Tech Lead',
        description: 'Gen AI Developer passionate about creating useful and intelligent systems.',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    rel="stylesheet"
                />
            </head>
            <body className={outfit.className}>
                <div className="ambient-glow" aria-hidden="true" />
                {children}
            </body>
        </html>
    )
}
