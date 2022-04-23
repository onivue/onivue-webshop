import '@/styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Sidenav from '@/components/Sidenav/Sidenav'
import TopBar from '@/components/TopBar/TopBar'
import ProductCard from '@/components/Product/ProductCard'
// import Header from '@/components/Header/Header'
// import Footer from '@/components/Footer/Footer'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [hotItem, setHotItems] = useState(null)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then((res) => res.json())
            .then((json) => {
                setHotItems(json)
                console.log(json)
            })
    }, [])

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

                <div className="flex flex-1 overflow-y-auto ">
                    <section className="grid w-full grid-cols-1 overflow-y-auto rounded-lg bg-white p-4 shadow-md lg:mr-4">
                        <Component {...pageProps} />
                    </section>
                    <aside className="grid hidden w-80 grid-cols-1 gap-4 rounded-lg bg-violet-100 p-4 shadow-md lg:block">
                        <h2 className="mb-4 font-bold">Tagesangebot</h2>
                        <ProductCard
                            key={hotItem?.id}
                            title={hotItem?.title}
                            price={hotItem?.price}
                            rate={hotItem?.rating.rate}
                            rateCount={hotItem?.rating.count}
                            image={hotItem?.image}
                            category={hotItem?.category}
                        />
                        <h2 className="my-4 font-bold">News</h2>
                        <div className="flex flex-col gap-y-4">
                            <div className="cursor-pointer">
                                <span className="text-sm">21.04.2022</span>
                                <h3 className="text-md font-semibold">
                                    Lorem ipsum dolor sit amet, consectetur adip
                                </h3>
                            </div>
                            <div className="cursor-pointer">
                                <span className="text-sm">18.04.2022</span>
                                <h3 className="text-md font-semibold">
                                    Lorem ipsum dolor sit amet, consectetur adip
                                </h3>
                            </div>
                            <div className="cursor-pointer">
                                <span className="text-sm">17.04.2022</span>
                                <h3 className="text-md font-semibold">
                                    Lorem ipsum dolor sit amet, consectetur adip
                                </h3>
                            </div>
                        </div>
                    </aside>
                </div>
                {/* <Footer /> */}
            </Sidenav>
        </>
    )
}

export default MyApp
