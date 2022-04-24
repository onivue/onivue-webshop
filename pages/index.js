import ProductCard from '@/components/Product/ProductCard'
import ProductCardSkeleton from '@/components/Product/ProductCardSkeleton'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
            <div className="sticky top-0 z-10 w-full rounded-lg bg-white bg-opacity-40 p-4 shadow-md backdrop-blur-sm">
                FILTER
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
