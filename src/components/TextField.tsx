
interface PropTypes {
    label: string,
    type: string,

}

export default function TextField({ label,type }: PropTypes) {
    return (
        <>
            <label className="block text-sm font-bold mb-1">
                {label}
            </label>
            <input type={type} className="shadow appearance-none border rounded w-full py-2 px-1 mb-4" />
        </>
    )
}
