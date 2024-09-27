function GoodItem({good}) {
    return (
        <li className="good">
            {good.displayName}
        </li>
    )
}

export {GoodItem}