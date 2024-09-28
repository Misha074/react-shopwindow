function GoodItem({ good }) {
    return (
        // <li className="good">
        //     <h2>
        //     {good.displayName}
        //     </h2>
        //     <img src={good.displayAssets[0].full_background} alt={good.displayName} />
        // </li>
        <div className="card">
            <div className="card-image">
                <img src={good.displayAssets[0].full_background} alt={good.displayName}/>
                <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
    )
}

export { GoodItem }