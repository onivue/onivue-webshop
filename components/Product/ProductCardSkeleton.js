import React from 'react'
import { HiStar } from 'react-icons/hi'

const ProductCardSkeleton = () => {
    return (
        <div className="group relative animate-pulse cursor-pointer rounded-2xl bg-white p-2 shadow-md ">
            <div className="relative overflow-x-hidden rounded-xl bg-gray-100">
                <div className="relative h-52 w-full animate-fade-in rounded-lg object-scale-down"></div>
            </div>
            <div className="mt-4 mb-2 flex w-full justify-between pl-2">
                <div className="relative w-full">
                    <div className="h-14 w-full overflow-hidden">
                        <div className="mb-0 w-full break-words rounded-lg bg-gray-100 text-lg font-semibold  text-gray-900">
                            &nbsp;
                        </div>
                    </div>
                    <p className="text-md mt-0 w-14 rounded-lg bg-primary-100">&nbsp;</p>
                    <div className="mt-1 text-sm">
                        <div className="w-10 rounded-lg bg-gray-100 align-bottom text-xs">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardSkeleton
