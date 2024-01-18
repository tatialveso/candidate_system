import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function CandidateDetail() {
    const [candidate, setCandidate] = useState({})
    const { id } = useParams()

    useEffect(() => {
        try {
            const fetchCandidate = async () => {
                const response = await axios.get(`https://dummyjson.com/users/${id}`)
                setCandidate(response.data)
            }

            fetchCandidate()
        } catch (error) {
            console.log(error)
        }
    }, [id])

    return (
        <div className="divide-y divide-gray-100 w-10/12 m-auto pt-24">
            <div>
                <img className="rounded-full w-40 h-40 m-auto" src={candidate.image} alt="" />
            </div>
            <div className="mt-6 mb-4 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nome completo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{candidate.firstName + " " + candidate.lastName}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Departamento</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{candidate.company?.department}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Cargo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{candidate.company?.title}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Endereço de e-mail</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{candidate.email}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Telefone de contato</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{candidate.phone}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Data de nascimento</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{candidate.birthDate + " " + "(" + candidate.age + " anos)"}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Endereço</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{candidate.address?.address + ", " + candidate.address?.city + ", " + candidate.address?.state + " " + candidate.address?.postalCode}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default CandidateDetail