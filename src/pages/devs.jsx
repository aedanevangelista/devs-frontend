import Header from "../components/Header"
import Devs from "../components/devs"
import Title from "../components/title"
import Footer from "../components/footer"

const Home = () => {

    return (
        <>
            <Header />

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