import { useEffect } from "react"

function Alert({name, closeAlert}) {

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    )
}

export { Alert }