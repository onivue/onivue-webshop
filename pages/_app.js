import '@/styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Sidenav from '@/components/Sidenav/Sidenav'
// import Header from '@/components/Header/Header'
// import Footer from '@/components/Footer/Footer'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no ,height=device-height"
                />
                <title>onivue-...</title>
            </Head>

            {/* <Header /> */}
            <Sidenav>
                <nav className="h-[60px] bg-amber-200 bg-opacity-60 rounded-lg p-4 mb-4">NAV</nav>
                <div className="flex flex-1">
                    <section className="grid grid-cols-1 p-4 rounded-lg bg-violet-300 w-full lg:mr-4">
                        <Component {...pageProps} />
                    </section>
                    <aside className="hidden lg:block w-80 p-4 rounded-lg bg-violet-300">ASIDE</aside>
                </div>
                {/* <Footer /> */}
            </Sidenav>
        </>
    )
}

export default MyApp
