import '@/styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import Sidenav from '@/components/Sidenav/Sidenav'
import TopBar from '@/components/TopBar/TopBar'
import RightSection from '@/components/RightSection/RightSection'
import Footer from '@/components/Footer/Footer'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const sectionRef = useRef(null)

    useEffect(() => {
        sectionRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }, [router])

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no ,height=device-height"
                />
                <title>onivue-...</title>
            </Head>

            <Sidenav>
                <TopBar />

                <div className="flex flex-1 overflow-y-auto">
                    <section
                        className="mb-4 mt-4 grid w-full grid-cols-1 overflow-y-auto rounded-lg px-4 pb-4 lg:mr-4"
                        ref={sectionRef}
                    >
                        <Component {...pageProps} />
                        <Footer />
                    </section>
                    <RightSection />
                </div>
            </Sidenav>
        </>
    )
}

export default MyApp
