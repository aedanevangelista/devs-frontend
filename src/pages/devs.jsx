import Search from "../components/search"
import Devs from "../components/devs"
import Title from "../components/title"
import Footer from "../components/footer"

const Home = () => {

    return (
        <>
            <header>
                <a href="#" className="logo">SEARCH DEVS</a>
                <Search/>
                <button type="button" className="add-button">New Dev</button>
            </header>

            <section className="title-wrapper">
                <Title />
            </section>

            <section className="container">
                <Devs />
                <Devs />
                <Devs />
                <Devs />
            </section>

            <footer>
                <Footer />
            </footer>
        </>
    )

}

export default Home