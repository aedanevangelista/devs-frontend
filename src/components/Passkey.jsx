const Passkey = () => {

    return (
        <div className="passkey-wrapper">
            <p> Please Enter Your Passkey </p>
            <input type="text" placeholder="Passkey..." />
            <div className="button-wrapper">
                <button type="button">Confirm</button>
                <button type="button">Cancel</button>
            </div>
        </div>
    )

}

export default Passkey