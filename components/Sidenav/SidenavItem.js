import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon } from '@/components/icons'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function SidenavItem({ title, href, icon, subLinks, callBackFunction }) {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [isActiveLink, setIsActiveLink] = useState(false)

    useEffect(() => {
        if (href !== router.asPath) {
            setIsActiveLink(false)
        }
        if (href === router.asPath) {
            setIsActiveLink(true)
        }
        subLinks?.map((sl) => {
            if (sl.href === router.asPath) {
                setIsOpen(true)
            }
        })
    }, [router])

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const ref = useRef(null)
    const inlineStyle = isOpen ? { height: ref.current?.scrollHeight } : { height: 0 }

    return (
        <div className="mt-2">
            <div
                className={`flex items-center p-2 transition-colors rounded-md  text-gray-500 hover:bg-primary-100 
        ${isOpen || isActiveLink ? 'bg-primary-100' : ''} ${subLinks && 'cursor-pointer'}`}
                onClick={subLinks && toggle}
            >
                <span aria-hidden="true">{icon}</span>
                <span className="ml-2 font-medium">
                    {href ? (
                        <Link href={href}>
                            <a className="hover:text-primary-600" onClick={callBackFunction}>
                                {title}
                            </a>
                        </Link>
                    ) : (
                        <div className="hover:text-primary-600">{title}</div>
                    )}
                </span>
                <span aria-hidden="true" className="ml-auto">
                    {subLinks && (
                        <ChevronDownIcon
                            className={`h-5 w-5 hover:text-primary-600 transition duration-300 ${
                                isOpen && 'transform -rotate-180'
                            }`}
                        />
                    )}
                </span>
            </div>
            <div
                className="mt-2 space-y-2 overflow-hidden text-gray-600 duration-300 ease-in-out px-7 transition-height"
                ref={ref}
                style={inlineStyle}
            >
                {/* SUBLINKS */}
                {subLinks?.map((link, index) => {
                    return (
                        <div key={index}>
                            <Link href={link.href || '/404'}>
                                <a
                                    className={`block p-2 font-medium text-base  transition duration-300   ${
                                        (router.asPath == link.href &&
                                            'text-primary-300 border-l-2 border-primary-200 ') ||
                                        'text-gray-400 hover:text-primary-300'
                                    }`}
                                    onClick={callBackFunction}
                                >
                                    {link.title}
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
