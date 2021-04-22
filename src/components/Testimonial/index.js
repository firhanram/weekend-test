import Lego2 from '../../assets/images/lego2.png'

const Testimonial = () => {
    return (
        <section className="w-full bg-primary h-section relative flex flex-col items-center">
            <img src={Lego2} alt="Lego" className="w-36 absolute right-0"/>
            <div className="mt-52 absolute w-10/12 lg:w-4/12">
                <p className="text-right font-medium">
                    <span className="text-secondary font-bold">Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
                </p>
            </div>
        </section>
    )
}

export default Testimonial