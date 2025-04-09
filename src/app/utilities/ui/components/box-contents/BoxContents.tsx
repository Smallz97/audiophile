import { BoxContents } from "@/app/utilities/library/definitions";

export default function BoxContent({ items }: { items: BoxContents[] }) {
    return (
        <div id="in-the-box-container" className="flex flex-col gap-6">
            <div id="container-title" className="text-2xl font-bold leading-9 tracking-wide text-black uppercase">
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