import "./Button.scss"

interface ButtonProps {
    text: string,
    type: string | undefined,
    image: string | undefined,
    handleClick: undefined | React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ text, type, image, handleClick }: ButtonProps) {

    return (
        <>
            <button className={type} onClick={handleClick ? handleClick : undefined}>
                {image && <img src={image} alt={text} />}
                {text}
            </button>
        </>
    )
}