function GoodItem({ good, addGood }) {
    return (
        <li className="good card">
            <div className="good__image card-image">
                <img src={good.displayAssets[0].full_background} alt={good.displayName} />
            </div>
            <div className="good__content card-content">
                <span className="good__title card-title">{good.displayName}</span>
                <p>{good.displayDescription}</p>
            </div>
            <div className="good__action card-action">
                <a href={`http://react-shop/good/${good.mainId}.com`}>Show more link</a>
                <button
                    onClick={() => addGood(good)}
                    type='button'>
                    Купить
                </button>
            </div>
        </li>
    )
}

export { GoodItem }