import profileImg from '../assets/profile.png'
import Sidebar from './Sidebar'

function Navbar() {
    return (
        <div>
            <Sidebar />
            <div className="fixed bg-gray-800 w-screen flex justify-between items-center p-5 shadow-xl">
                <h1 className="text-white">Logo</h1>
                <input
                    type="text"
                    placeholder="Buscar candidato"
                    className="rounded-3xl w-6/12 p-2"
                />
                <img className="rounded-full w-10 h-10" src={ profileImg } alt="" />
            </div>
        </div>
    )
}

export default Navbar