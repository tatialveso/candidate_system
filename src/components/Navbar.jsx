/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.png'
import Sidebar from './Sidebar'

function Navbar({ search, setSearch }) {
    return (
        <div>
            <Sidebar />
            <div className="fixed bg-gray-800 w-screen flex justify-between items-center p-5 shadow-xl">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-10 h-10">
                        <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
                    </svg>

                </Link>       
                <input
                    type="text"
                    placeholder="Buscar por um candidato"
                    className="rounded-3xl w-6/12 p-2 pl-5"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img className="rounded-full w-10 h-10 mr-5" src={profileImg} alt="" />
            </div>
        </div>
    )
}

export default Navbar