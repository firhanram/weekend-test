import NextIcon from '../../assets/images/next-icon.png'

const Grid = ({data}) => {
    const renderCards = () => {
        return data.map(({imageURL, text}) => (
            <div className="relative">
                <div className="w-full bg-black bg-opacity-50 py-4 lg:py-2 px-6 lg:h-16 flex justify-between absolute bottom-0">
                  <h3 className="font-bold text-primary xl:pr-20">{text}</h3>
                  <img src={NextIcon} alt="Next" className="w-8 h-8 ml-4"/>
                </div>
                <img src={imageURL} alt="Accusamus" className="w-full"/>
            </div>
        ))
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:grid-rows-1 grid-rows-3 gap-2 relative">
            {renderCards()}
        </div>
    )
}

export default Grid 