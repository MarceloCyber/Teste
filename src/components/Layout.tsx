import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3 py-7 shadow-2xl
            bg-white text-gray-800 rounded-md  overflow-hidden
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}