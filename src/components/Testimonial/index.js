import Lego2 from '../../assets/images/lego2.png'
import Oval from '../../assets/images/oval.png'
import TestimonialSlider from '../TestimonialSlider'

const Testimonial = () => {
    return (
        <section className="w-full bg-primary h-section relative">
            <div className="flex w-full justify-end">
                <img src={Lego2} alt="Lego" className="w-36"/>
            </div>
            <div className="mt-16 w-10/12 xl:w-4/12 mx-auto">
                <p className="text-right font-medium">
                    <span className="text-secondary font-bold">Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
                </p>
                <h3 className="font-semibold italic text-primary mt-5 text-right">-weekend team</h3>
            </div>
            <img src={Oval} alt="oval" className="w-20.5 mt-9 ml-14 lg:ml-72"/>
            <div className="w-10/12 mx-auto">
                <h3 className="text-primary font-black text-3xl -mt-5 lg:text-center lg:-mt-10">Testimonial</h3>
            </div>
            <TestimonialSlider />
        </section>
    )
}

export default Testimonial