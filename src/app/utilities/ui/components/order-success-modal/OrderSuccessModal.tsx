export default function OrderSuccessModal() {
    return (
        <div
            id="modal-opaque-backdrop"
            className="fixed inset-0 z-50 bg-black/50"
        >
            <div
                id="modal-wrapper"
                className="px-6 pt-56 flex md:justify-end bg-blue-500"
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`relative z-10 w-full rounded-lg bg-white px-8 md:px-12 py-8 md:py-12 shadow-lg flex flex-col gap-8 max-md:h-[calc(100dvh-8rem)] md:max-h-[calc(100dvh-13rem)]`}
                ></div>
            </div>
        </div>
    )
}