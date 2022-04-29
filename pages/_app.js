/* eslint-disable @next/next/no-img-element */
import '@/styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import SideBar from '@/components/Layout/SideBar/SideBar'
import TopBar from '@/components/Layout/Header/Header'
import RightSection from '@/components/RightSection/RightSection'
import Footer from '@/components/Layout/Footer/Footer'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no ,height=device-height"
                />
                <title>onivue-webshop</title>
            </Head>
            <img
                src="https://play.tailwindcss.com//img/beams.jpg"
                alt=""
                // width="1308"
                className="fixed top-1/2 left-1/2 -z-50 max-w-none -translate-x-1/2 -translate-y-1/2 animate-fade-in"
            />
            <SideBar>
                <TopBar />
                <div className="flex flex-1">
                    <section className="mb-4 mt-4 grid w-full grid-cols-1  rounded-lg px-4 pb-4">
                        <Component {...pageProps} />
                        <Footer />
                    </section>
                    <RightSection />
                </div>
            </SideBar>
        </>
    )
}

export default MyApp
