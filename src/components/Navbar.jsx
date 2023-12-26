/* eslint-disable react/prop-types */
import profileImg from '../assets/profile.png'
import Sidebar from './Sidebar'

function Navbar({ search, setSearch }) {
    return (
        <div>
            <Sidebar />
            <div className="fixed bg-gray-800 w-screen flex justify-between items-center p-5 shadow-xl">
                <h1 className="text-white">Logo</h1>
                <input
                    type="text"
                    placeholder="Buscar por um candidato"
                    className="rounded-3xl w-6/12 p-2 pl-5"
                    value={ search }
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img className="rounded-full w-10 h-10" src={profileImg} alt="" />
            </div>
        </div>
    )
}

export default Navbar