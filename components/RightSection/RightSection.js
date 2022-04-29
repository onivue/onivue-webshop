import { useState, useEffect } from 'react'
import ProductCard from '@/components/Product/ProductCard'
import ProductCardSkeleton from '@/components/Product/ProductCardSkeleton'

const RightSection = () => {
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
        <div className="w-92 sticky top-20 hidden h-[calc(100vh-5rem)] gap-4 overflow-auto pt-4 pr-4 pl-2 xl:block">
            <h2 className="mb-4 font-bold text-primary-500">Tagesangebot</h2>
            {hotItem ? <ProductCard key={hotItem.id} product={hotItem} /> : <ProductCardSkeleton />}
            <h2 className="my-4 font-bold text-primary-500">News</h2>
            <div className="flex flex-col gap-y-4">
                <div className="cursor-pointer">
                    <span className="text-sm">21.04.2022</span>
                    <h3 className="text-md font-semibold">Lorem ipsum dolor sit amet, consectetur adip</h3>
                </div>
                <div className="cursor-pointer">
                    <span className="text-sm">18.04.2022</span>
                    <h3 className="text-md font-semibold">Lorem ipsum dolor sit amet, consectetur adip</h3>
                </div>
                <div className="cursor-pointer">
                    <span className="text-sm">17.04.2022</span>
                    <h3 className="text-md font-semibold">Lorem ipsum dolor sit amet, consectetur adip</h3>
                </div>
            </div>
            <h2 className="my-4 font-bold text-primary-500">Feedback</h2>
            <div className="col-span-4 mb-4 flex justify-between text-2xl">
                <span className="cursor-pointer">🙂</span>
                <span className="cursor-pointer">🙁</span>
                <span className="cursor-pointer">🙁</span>
            </div>
            <textarea
                name=""
                id=""
                cols="10"
                rows="4"
                placeholder="Wir freuen uns auf dein Feedback!"
            ></textarea>
        </div>
    )
}

export default RightSection
