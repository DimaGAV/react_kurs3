function WelcomeMessage({ name }) {
    return <h1>Добро пожаловать на сайт, {name || "пользователь"}!</h1>
}

export default WelcomeMessage;