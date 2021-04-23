const Section = ({title, text}) => (
    <div className="mb-16 xl:w-7/12 mx-auto">
        <h3 className="text-primary font-black text-3xl md:text-center">{title}</h3>
        <p className="text-primary mt-7 lg:text-center">{text}</p>
    </div>
)

export default Section