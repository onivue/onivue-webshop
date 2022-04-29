export function SideBarNavigation() {
    return (
        <nav className="flex flex-col gap-8">
            <div>
                <h2 className="mb-4 font-bold">Kategorien</h2>
                <div className="flex flex-col gap-2 text-zinc-700">
                    <div className="cursor-pointer rounded-lg bg-primary-100 py-1 px-3 text-primary-800">
                        Kleidung
                    </div>
                    <div className="cursor-pointer rounded-lg bg-primary-100 py-1 px-3 text-primary-800">
                        Schmuck
                    </div>
                    <div className="cursor-pointer rounded-lg bg-primary-100 py-1 px-3 text-primary-800">
                        Elektronik
                    </div>
                </div>
            </div>
            <div>
                <h2 className="mb-4 font-bold">Direkt zu</h2>
                <div className="flex flex-col gap-2">
                    <div className="cursor-pointer rounded-lg bg-primary-100 py-1 px-3 text-primary-800">
                        Ausverkauf
                    </div>
                    <div className="cursor-pointer rounded-lg bg-primary-100 py-1 px-3 text-primary-800">
                        Gutscheine
                    </div>
                    <div className="cursor-pointer rounded-lg bg-primary-100 py-1 px-3 text-primary-800">
                        Helpcenter
                    </div>
                </div>
            </div>
        </nav>
    )
}
