import chefLogo from '../assets/chefLogo.png'
export default function Header(){
    return(
        <header className='Header'>
            <img src={chefLogo}></img>
            <span>AI Chef</span>
        </header>
    )
} 