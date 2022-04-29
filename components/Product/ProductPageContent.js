import React from 'react'
import { BsPinAngle, BsCart3 } from 'react-icons/bs'
import { HiStar } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'

function Rating(props) {
    return (
        <div className="mt-0 text-sm text-gray-800">
            <HiStar className="inline" />
            <span className="ml-2 align-bottom text-xs text-gray-400">{props.rate}</span>
        </div>
    )
}

const ProductPageContent = ({ product }) => {
    return (
        <div className="grid grid-cols-1 gap-4 rounded-xl bg-white p-4 shadow-md lg:grid-cols-2">
            <div className="rounded-xl bg-white p-4 shadow-md shadow-primary-100">
                <div className="relative h-80 w-full animate-fade-in  object-scale-down">
                    <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="scale-down"
                        placeholder="empty"
                        priority
                    />
                </div>
            </div>
            <div className="relative flex flex-col ">
                <div className="flex">
                    <div className="cursor-pointer rounded-lg bg-white bg-opacity-40 px-2 py-1 text-xs backdrop-blur-sm backdrop-filter hover:bg-primary-100 hover:text-primary-500">
                        {product.category}
                    </div>
                </div>

                <div className=" mt-4 mb-2 flex w-full flex-1 flex-col justify-between pl-2">
                    <div className="relative w-full">
                        <div className="h-14 overflow-hidden ">
                            <span className="mb-0 break-words text-lg font-semibold text-gray-900">
                                {product.title}
                            </span>
                        </div>
                        <div className="mt-4">
                            <span className="mb-0 break-words   text-gray-900">{product.description}</span>
                        </div>
                    </div>

                    <div className=" flex w-full justify-between">
                        <div>
                            <p className="text-md mt-4 text-primary-800">
                                {new Intl.NumberFormat('de-CH', {
                                    style: 'currency',
                                    currency: 'CHF',
                                    minimumFractionDigits: 2,
                                }).format(product.price)}
                            </p>
                            <Rating rate={product.rating.rate}></Rating>
                        </div>
                        <div className="flex items-end">
                            <div className="mr-2 cursor-pointer rounded-full bg-white p-2 hover:text-primary-500">
                                <BsPinAngle className="h-5 w-5" />
                            </div>
                            <div className="cursor-pointer rounded-full bg-white p-2 hover:text-primary-500">
                                <BsCart3 className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageContent
