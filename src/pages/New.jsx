import Header from '../components/Header'
import Footer from '../components/footer'

const NewDev = () => {

    return (

        <>
            <Header />

            <section className='container'>
                <form>

                    <h2> Add New Dev </h2>
                    
                    <div className="label-wrapper">
                        <label htmlFor="fullname">
                            <p>Fullname</p>
                            <input type="text" id="fullname" name="fullname" placeholder="Fullname..."/>
                        </label>
                        
                        <label htmlFor="position">
                            <p>Position</p>
                            <input type="text" id="position" name="position" placeholder="Position... ( e.g: frontend developer )"/>
                        </label>
                        
                        <label htmlFor="stacks">
                            <p>Tech Stacks</p>
                            <input type="text" id="stacks" name="stacks" placeholder="Use comma ',' ( e.g: html, css)"/>
                        </label>
                        
                        <label htmlFor="passkey">
                            <p>Passkey</p>
                            <input type="text" id="passkey" name="passkey" placeholder="Passkey..."/>
                            <button type='button' className='showPass'>show</button>
                        </label>
                        
                        <label htmlFor="confirm">
                            <p>Confirm Passkey</p>
                            <input type="text" id="confirm" name="confirm" placeholder="Confirm Passkey..."/>
                        </label>
                    </div>


                    <button type='button' className='save'>SAVE</button>

                </form>
            </section>


            <footer>
                <Footer/>
            </footer>

        </>

    )

}

export default NewDev