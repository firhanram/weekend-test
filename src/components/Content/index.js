import { Section, Grid } from ".."
import Steps from '../../assets/images/steps.png'
import Accusamus from '../../assets/images/accusamus.png'
import Indignation from '../../assets/images/indignation.png'

const sectionData = [
    {
        title: 'POV',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        title: 'Resource',
        text: 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best'
    }
]

const tipsData = [
    {
        imageURL: Steps,
        text: 'Start quickly with simple steps'
    },
    {
        imageURL: Accusamus,
        text: 'Run smoothly at vero eos et accusamus'
    },
    {
        imageURL: Indignation,
        text: 'Denounce with righteous indignation'
    }
]

const Content = () => {
    const renderSection = () => {
        return sectionData.map(({title, text}) => (
            <Section title={title} text={text} key={title} />
        ))
    }

    return (
        <div className="w-9/12 mx-auto">
            {renderSection()}
            <div className="w-full mb-16">
                <h3 className="text-primary text-3xl font-black mb-7 md:text-center">Help & Tips</h3>
                <div className="w-full mb-16">
                    <Grid data={tipsData} />
                </div>
                <div className="mb-16 xl:mb-0 xl:absolute lg:left-0 lg:right-0">
                    <h3 className="text-primary text-3xl font-black mb-7 md:text-center">You’re all set.</h3>
                    <p className="text-primary md:text-center lg:w-8/12 xl:w-4/12 lg:mx-auto">The wise man therefore always holds in these matters to this principle of selection.</p>
                </div>
            </div>
        </div>
    )
}


export default Content