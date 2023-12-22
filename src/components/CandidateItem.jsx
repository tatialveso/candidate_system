function CandidateItem() {
  return (
    <li key="" className="flex justify-between gap-x-6 py-5 m-auto w-10/12">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="" alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">Nome</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">Cidade</p>
            </div>
            <div className="min-w-0 flex-auto">
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">Email</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">Telefone</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">Teste</p>
          </div>
        </li>
  )
}

export default CandidateItem