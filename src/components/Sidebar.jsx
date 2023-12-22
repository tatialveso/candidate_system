function Sidebar() {
    return (
        <div className="pointer-events-none fixed inset-y-0 w-52">
            <div className="flex h-screen flex-col bg-white py-6 shadow-xl">
                <div className="py-20 sm:px-6">
                    <p className="text-base font-semibold leading-6 text-gray-900">
                        Panel title
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar