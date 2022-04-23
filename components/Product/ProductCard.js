import React from 'react'
import { BsPinAngle, BsCart3 } from 'react-icons/bs'
import { HiStar } from 'react-icons/hi'

function Rating(props) {
    return (
        <div className="mt-0 text-sm text-gray-800">
            <HiStar className="inline" />
            <span className="ml-2 align-bottom text-xs text-gray-400">{props.rate}</span>
        </div>
    )
}

const ProductCard = ({ title, price, rate, id, image, category }) => {
    return (
        <div className="group relative cursor-pointer rounded-2xl bg-white p-2 shadow-md hover:ring-2 hover:ring-primary-300">
            <div className="relative overflow-x-hidden rounded-xl">
                <img className="h-52 w-full rounded-lg object-scale-down" src={image} />
                <div className="absolute left-2 bottom-2">
                    <div className="cursor-pointer rounded-lg bg-white bg-opacity-40 p-1 text-xs  backdrop-blur-sm backdrop-filter hover:bg-primary-100 hover:text-primary-500">
                        {category}
                    </div>
                </div>
            </div>
            <div className="mt-4 mb-2 flex w-full justify-between pl-2">
                <div className="relative w-full">
                    <div className="h-14 overflow-hidden ">
                        <span className="mb-0 break-words text-lg font-semibold text-gray-900">{title}</span>
                    </div>
                    <p className="text-md mt-0 text-primary-800">{price}</p>
                    <Rating rate={rate}></Rating>
                </div>

                <div className="absolute right-2 bottom-2 flex group-hover:flex lg:hidden">
                    <div className="mr-2 cursor-pointer rounded-full bg-white p-2 hover:text-primary-500">
                        <BsPinAngle className="h-5 w-5" />
                    </div>
                    <div className="cursor-pointer rounded-full bg-white p-2 hover:text-primary-500">
                        <BsCart3 className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard