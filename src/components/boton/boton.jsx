export default function Boton({ onClick, children }) {

    function handleClick() {
        onClick();
    }

    return <button onClick={handleClick}>{children}</button>
}