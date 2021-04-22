import Logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className="w-full bg-white py-4">
            <div className="flex items-center w-5/6 lg:w-9/12 mx-auto">
                <img src={Logo} alt="Logo" className="w-8 h-8"/>
                <div className="ml-3">
                    <h3 className="text-xs leading-none">Good Morning</h3>
                    <h3 className="font-black">Fellas</h3>
                </div>
            </div>
        </header>
    )
}

export default Header