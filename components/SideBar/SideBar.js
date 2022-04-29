import { useState, useRef, useEffect, useCallback } from 'react'
import router from 'next/router'
import { SideBarLogo } from './SideBarLogo'
import { SideBarOverlay } from './SideBarOverlay'
import { SideBarNavigation } from './SideBarNavigation'
import { SideBarToggleButton } from './SideBarToggleButton'

function SideBarNavigationWrapper(props) {
    return (
        <aside
            className={`fixed inset-y-0 z-20 w-80 transform py-4 pl-4 opacity-100 transition-all duration-500 lg:h-screen lg:-translate-x-0 ${
                props.sideBarIsOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div
                className="no-scrollbar flex h-full flex-1 flex-col overflow-y-hidden rounded-xl bg-white p-4 shadow-md hover:overflow-y-auto focus:outline-none"
                ref={props.ref}
            >
                {props.children}
            </div>
        </aside>
    )
}

function SideBar({ children }) {
    const [sideBarIsOpen, toggleSideBar] = useState(false)
    const ref = useRef(null)
    //MOBILE SIDEBAR TOGGLE HANDLER
    useEffect(() => {
        const handleOutsideClick = (event) => {
            !ref.current?.contains(event.target) && sideBarIsOpen && toggleSideBar(false)
        }
        window.addEventListener('mousedown', handleOutsideClick)
        return () => window.removeEventListener('mousedown', handleOutsideClick)
    }, [sideBarIsOpen, ref])
    return (
        <>
            {sideBarIsOpen ? <SideBarOverlay /> : <SideBarToggleButton toggleSidenav={toggleSideBar} />}
            <main className="mx-auto max-w-[1900px] ">
                <SideBarNavigationWrapper sideBarIsOpen={sideBarIsOpen} ref={ref}>
                    <SideBarLogo />
                    <SideBarNavigation />
                </SideBarNavigationWrapper>
                {/*PAGE CONTENT*/}
                <div className="flex flex-1 flex-col lg:ml-80">{children}</div>
            </main>
        </>
    )
}
export default SideBar
