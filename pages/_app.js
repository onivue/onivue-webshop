import '@/styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
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

            <div className="flex min-h-screen flex-col  items-center justify-center pt-[60px]">
                <div className="flex w-full max-w-[1900px] flex-1  flex-col  p-4 ">
                    <Component {...pageProps} />
                </div>

                {/* <Footer /> */}
            </div>
        </>
    )
}

export default MyApp
