import profileImg from '../assets/profile.png'

function Navbar() {
    return (
        <div className="bg-gray-800 w-screen flex justify-between items-center p-5">
            <h1 className="text-white">Logo</h1>
            <input
                type="text"
                placeholder="Buscar candidato"
                className="rounded-3xl w-6/12 p-2"
            />
            <img className="rounded-full w-10 h-10" src={ profileImg } alt="" />
        </div>
    )
}

export default Navbar