import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import router from 'next/router'
import { HiOutlineSearch, HiOutlineUser } from 'react-icons/hi'
import { BsPinAngle, BsCart3 } from 'react-icons/bs'
import LogoIcon from '@/components/LogoIcon/LogoIcon'

function TopBar() {
    return (
        <div className="mx-4 mb-4 mt-4  rounded-lg bg-white p-3 px-3 shadow-md">
            <div className="relative flex w-full flex-wrap-reverse items-center justify-between justify-items-end lg:flex-nowrap">
                <div className="relative h-full w-full  text-gray-600">
                    <input
                        className="h-full w-full rounded-lg  border-gray-200 bg-white px-2 py-1 pr-10 text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                    <button type="button" className="absolute right-0 top-0 mt-2 mr-2 hover:text-primary-500">
                        <HiOutlineSearch />
                    </button>
                </div>

                <div className="mb-3 flex w-full justify-between lg:ml-2 lg:mb-0 lg:w-auto">
                    <div className="mr-4 grid h-full place-items-center rounded-lg lg:hidden ">
                        <LogoIcon className="h-7 w-7" />
                    </div>
                    <div className="flex items-center divide-x-2 divide-primary-200 text-sm">
                        <div className="flex cursor-pointer items-center  px-2 hover:text-primary-500">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 p-2 ring-2 ring-primary-300">
                                <HiOutlineUser className="h-full w-full text-primary-500" />
                            </div>
                            <span className="ml-2 hidden max-w-[80px] flex-grow overflow-hidden text-ellipsis whitespace-nowrap lg:block">
                                username
                            </span>
                        </div>

                        <div className="false cursor-pointer px-2 hover:text-primary-500">
                            <BsPinAngle className="mx-1 h-6 w-6" />
                        </div>
                        <div className="false cursor-pointer px-2 hover:text-primary-500">
                            <BsCart3 className="mx-1 h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar
