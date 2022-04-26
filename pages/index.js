import ProductCard from '@/components/Product/ProductCard'
import ProductCardSkeleton from '@/components/Product/ProductCardSkeleton'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiOutlineFilter } from 'react-icons/hi'

export default function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                setItems(json)
                console.log(json)
            })
    }, [])

    return (
        <div className="relative">
            <div className="mx-auto py-20 text-center">
                <h2 className="text-xl font-bold">Next.js + Tailwind</h2>
                <h1 className="bg-gradient-to-r from-blue-300 via-primary-400 to-primary-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                    Modern eCommerce Prototype
                </h1>
            </div>

            <div className="sticky top-0 z-10 flex w-full items-center justify-between rounded-lg bg-white  p-2 shadow-md backdrop-blur-sm">
                <HiOutlineFilter className="align-middle text-sm text-primary-500" />
                <div className="flex gap-2">
                    {items &&
                        [...new Set(items.map((item) => item['category']))].map((cat) => {
                            return (
                                <div
                                    className="cursor-pointer rounded-lg bg-primary-200 py-1 px-2 text-xs text-primary-800"
                                    key={cat}
                                >
                                    {cat}
                                </div>
                            )
                        })}
                </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                {items
                    ? items.map((item) => <ProductCard key={item.id} product={item} />)
                    : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item) => (
                          <ProductCardSkeleton key={item} />
                      ))}
                {}
            </div>
        </div>
    )
}
