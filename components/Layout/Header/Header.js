import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import router from 'next/router'
import { HiOutlineSearch, HiOutlineUser } from 'react-icons/hi'
import { BsPinAngle, BsCart3 } from 'react-icons/bs'
import LogoIcon from '@/components/LogoIcon/LogoIcon'

function TopBar() {
    return (
        <>
            <div className="fixed inset-x-0 z-10 h-20 w-full bg-gradient-to-b from-gray-50"></div>
            {/* <div className="fixed inset-x-0 bottom-0 z-10 h-6 w-full bg-gradient-to-t from-gray-50 "></div> */}
            <div className="sticky  top-4 z-10 mx-4 mt-4 flex items-center rounded-lg bg-white p-3 px-3 shadow-md lg:h-16 ">
                <div className="relative flex w-full flex-wrap-reverse items-center justify-between justify-items-end lg:flex-nowrap">
                    <div className="relative h-full w-full  text-gray-600">
                        <input
                            className="h-full w-full rounded-lg  border-gray-200 bg-white px-2 py-1 pr-10 text-sm focus:outline-none"
                            type="search"
                            name="search"
                            placeholder="Search"
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-0 mt-2 mr-2 hover:text-primary-500"
                        >
                            <HiOutlineSearch />
                        </button>
                    </div>

                    <div className="mb-3 flex w-full justify-between lg:ml-2 lg:mb-0 lg:w-auto">
                        <div className="mr-4 grid h-full place-items-center rounded-lg lg:hidden ">
                            <Link href="/">
                                <a>
                                    <LogoIcon className="h-7 w-7" />
                                </a>
                            </Link>
                        </div>
                        <div className="flex items-center  divide-primary-200 text-sm">
                            <div className="flex cursor-pointer items-center  px-3 hover:text-primary-500">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 p-2 ring-2 ring-primary-300">
                                    <HiOutlineUser className="h-full w-full text-primary-500" />
                                </div>
                                <span className="ml-2 hidden max-w-[80px] flex-grow overflow-hidden text-ellipsis whitespace-nowrap lg:block">
                                    username
                                </span>
                            </div>

                            <div className="false cursor-pointer px-3 hover:text-primary-500">
                                <BsPinAngle className="h-6 w-6" />
                            </div>
                            <div className="false cursor-pointer px-3 hover:text-primary-500">
                                <BsCart3 className="h-6 w-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopBar
