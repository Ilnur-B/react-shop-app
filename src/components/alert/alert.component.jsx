import {useEffect} from "react";

const Alert = ({name, deleteAlertName}) => {


    useEffect(() => {
        const timeout = setTimeout(deleteAlertName, 3000)

        return () => clearTimeout(timeout)
    }, [name])


    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен</div>
        </div>
    )
}

export default Alert
