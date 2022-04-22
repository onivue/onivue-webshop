export default function SidenavMiniButton({ icon }) {
    return (
        <button className="p-2 transition-colors duration-200 rounded-full text-primary-400 hover:text-primary-600 bg-primary-50 hover:bg-primary-100 focus:bg-primary-100 ring-primary-300 focus:ring focus:outline-none">
            {icon}
        </button>
    )
}
