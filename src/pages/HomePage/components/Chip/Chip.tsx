import "./Chip.scss"

interface ChipProps {
    svg: string,
    border: string,
    background: string,
    text: string
}

export default function Chip({ svg, border, background, text }: ChipProps) {

    return (
        <div className={`chip border ${border} bg-linear-to-r from-transparent ${background}`}>
            <img src={svg} alt={text} />
            <span className="md:text-xl text-lg">{text}</span>
        </div>
    )
}