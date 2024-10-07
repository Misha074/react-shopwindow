import React from "react";

function Preloader() {
    return <div className="progress">
        <div className="indeterminate"></div>
        <span>Идёт загрузка</span>
    </div>
}

export { Preloader }