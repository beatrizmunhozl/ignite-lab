import Logo from "./logo"

const Header = () => {
    //w-full no tailwind quer dizer que a largura (w) vai ocupar todo o espaço (full)
    //py => padding no eixo y (em cima e embaixo) 5 === 20px (5 x 4px)
    //pt => padding-top
    //flex => display:flex
    //items-center => align-items: center
    //justify-center => justify-content: center
    //bg => background
    //border-b => border-bottom 
    return (
        <header className="w-full py-5 flex justify-center items-center bg-gray-700 border-b border-gray-600">
            <Logo />
        </header>
    )
}

export default Header