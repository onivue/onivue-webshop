import Link from 'next/link'
import LogoIcon from '@/components/LogoIcon/LogoIcon'

export function SideBarLogo() {
    return (
        <Link href="/" passHref>
            <div className="mt-5 mb-8 flex justify-center">
                <LogoIcon className="h-12 w-12 cursor-pointer" />
            </div>
        </Link>
    )
}
