import { HiMenuAlt2 } from 'react-icons/hi'

export function SideBarToggleButton(props) {
    return (
        <div className={`fixed bottom-5 right-5 z-50 animate-fade-in items-center space-x-4 lg:hidden`}>
            <button
                onClick={props.toggleSidenav}
                className="hover:text-primary rounded-md bg-primary-50 p-1 ring-primary-200 transition-colors duration-200 hover:bg-primary-100 focus:outline-none focus:ring"
            >
                <HiMenuAlt2 className="h-8 w-8" />
            </button>
        </div>
    )
}
