import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import router from 'next/router'
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
            <div className="fixed flex items-center space-x-4 top-5 right-5 lg:hidden">
                <button
                    onClick={toggleSidenav}
                    className="p-1 transition-colors duration-200 rounded-md bg-primary-50 hover:text-primary hover:bg-primary-100 focus:outline-none focus:ring"
                >
                    MENU
                </button>
            </div>

            {/*MAIN WRAPPER*/}
            <main className="flex mx-auto max-w-[1840px]">
                {/* OVERLAY */}
                {sidenavIsOpen && (
                    <div className="fixed inset-0 z-10 h-screen bg-gray-600 opacity-50 lg:hidden" />
                )}
                {/*SIDEBAR*/}
                <aside
                    className={`fixed lg:sticky inset-y-0 lg:h-screen w-80 lg:w-80 pl-4 py-4 z-10 transform opacity-100 transition-all duration-500 lg:-translate-x-0 
                        ${sidenavIsOpen ? 'translate-x-0' : '-translate-x-full'}
                        `}
                >
                    {/* MAIN NAV */}
                    <nav
                        ref={ref}
                        className="flex h-full bg-white px-3 py-2 rounded-xl shadow-lg focus:outline-none"
                    >
                        <nav className="flex flex-col flex-1 p-3 overflow-y-hidden hover:overflow-y-auto no-scrollbar">
                            <div className="flex justify-center mt-5 mb-8">
                                <Link href="/">
                                    <a>LOGO</a>
                                </Link>
                            </div>
                        </nav>
                    </nav>
                </aside>
                {/*CONTENT*/}
                <div className="flex-1 flex flex-col min-h-screen p-4">{children}</div>
            </main>
        </>
    )
}
export default Sidenav
