import { BoxContents } from "@/app/utilities/library/definitions";

export default function BoxContent({ items }: { items: BoxContents[] }) {
    return (
        <div
            id="in-the-box-container"
            className="flex flex-col md:max-lg:flex-row gap-6 md:gap-16 md:max-lg:w-4/5 md:max-lg:justify-between lg:gap-8 lg:w-2/5"
        >
            <div
                id="container-title"
                className="text-2xl md:text-3xl font-bold leading-9 tracking-wide md:tracking-wider text-black uppercase"
            >
                In the box
            </div>
            <ul id="box-contents-container" className="flex flex-col gap-2 list-none">
                {items.map((item, index) => (
                    <li key={index} className="flex gap-6">
                        <span className="text-base font-bold leading-normal text-darkorange">{item.quantity}x</span>
                        <span className="text-base font-normal leading-normal text-black opacity-50 capitalize">
                            {item.item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};