export default function Category({ category: {id, title, image} }) {
    return (
        <a href="#" className="flex flex-col group items-center gap-y-2 text-center p-4 transition hover:bg-purple-50 w-[150px] h-[100px]">
            <img src={image} alt={title} className="w-16 h-16 rounded border border-gray-200" />
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking-tight">{title}</span>
        </a>
    )
}