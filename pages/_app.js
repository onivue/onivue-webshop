import '@/styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Sidenav from '@/components/Sidenav/Sidenav'
import TopBar from '@/components/TopBar/TopBar'
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
                <TopBar />

                <div className="flex flex-1">
                    <section className="grid w-full grid-cols-1 rounded-lg bg-violet-300 p-4 shadow-lg lg:mr-4">
                        <Component {...pageProps} />
                    </section>
                    <aside className="hidden w-80 rounded-lg bg-violet-300 p-4 shadow-lg lg:block">
                        ASIDE
                    </aside>
                </div>
                {/* <Footer /> */}
            </Sidenav>
        </>
    )
}

export default MyApp
