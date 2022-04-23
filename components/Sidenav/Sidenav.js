import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import router from 'next/router'
import LogoIcon from '../LogoIcon/LogoIcon'
import { HiMenuAlt2 } from 'react-icons/hi'
// import { motion, AnimatePresence } from 'framer-motion'

function Sidenav({ children }) {
    const [sidenavIsOpen, toggleSidenav] = useState(false)

    const ref = useRef(null)

    //MOBILE SIDENAV CLOSE HANDLER
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                if (!sidenavIsOpen) return
                toggleSidenav(false)
            }
        }
        window.addEventListener('mousedown', handleOutsideClick)
        return () => window.removeEventListener('mousedown', handleOutsideClick)
    }, [sidenavIsOpen, ref])

    return (
        <>
            {/*MOBILE SIDEBAR BUTTON*/}
            <div className="fixed bottom-5 right-5 flex items-center space-x-4 lg:hidden">
                <button
                    onClick={toggleSidenav}
                    className="hover:text-primary rounded-md bg-primary-50 p-1 transition-colors duration-200 hover:bg-primary-100 focus:outline-none focus:ring"
                >
                    <HiMenuAlt2 className="h-8 w-8" />
                </button>
            </div>

            {/*MAIN WRAPPER*/}
            <main className="mx-auto flex max-w-[1840px]">
                {/* OVERLAY */}
                {sidenavIsOpen && (
                    <div className="fixed inset-0 z-10 h-screen bg-gray-600 opacity-50 lg:hidden" />
                )}
                {/*SIDEBAR*/}
                <aside
                    className={`fixed inset-y-0 z-10 w-80 transform py-4 pl-4 opacity-100 transition-all duration-500 lg:sticky lg:h-screen lg:w-80 lg:-translate-x-0 
                        ${sidenavIsOpen ? 'translate-x-0' : '-translate-x-full'}
                        `}
                >
                    {/* MAIN NAV */}
                    <nav
                        ref={ref}
                        className="flex h-full rounded-xl bg-white px-3 py-2 shadow-lg focus:outline-none"
                    >
                        <nav className="no-scrollbar flex flex-1 flex-col overflow-y-hidden p-3 hover:overflow-y-auto">
                            <div className="mt-5 mb-8 flex justify-center">
                                <Link href="/">
                                    <a>
                                        <LogoIcon className="h-12 w-12" />
                                    </a>
                                </Link>
                            </div>
                        </nav>
                    </nav>
                </aside>
                {/*CONTENT*/}
                <div className="flex min-h-screen flex-1 flex-col p-4">{children}</div>
            </main>
        </>
    )
}
export default Sidenav
