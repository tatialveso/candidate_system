/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function DeletedCandidates({ deletedCandidate }) {
    const renderCandidate = deletedCandidate.map((candidate) => {
        return (
            <li key={candidate.id} className="flex justify-between gap-x-6 py-5 m-auto w-10/12">
                <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={candidate.image} alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{candidate.firstName + " " + candidate.lastName}</p>
                        {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{candidate.address.city + ", " + candidate.address.state}</p> */}
                    </div>
                    <div className="min-w-0 flex-auto">
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{candidate.email}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{candidate.phone}</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:items-end sm:gap-3">
                    <Link to={`/candidato/${candidate.id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                            <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clipRule="evenodd" />
                            <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                        </svg>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                </div>
            </li>
        )
    })

    console.log(deletedCandidate)

    return (
        <div>
            <ul role="list" className="divide-y divide-gray-100 ml-48 pt-24">
                {renderCandidate}
            </ul>
        </div>
    );
}

export default DeletedCandidates