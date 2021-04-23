import { Content, Footer } from ".."
import Lego3 from '../../assets/images/lego3.png'

const Detail = () => (
    <section className="h-full w-full bg-black pt-40">
        <Content />
        <img src={Lego3} alt="Lego" className="w-60 h-80"/>
        <Footer />
    </section>
)

export default Detail