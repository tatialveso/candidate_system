import CandidateItem from "./CandidateItem";

function CandidateList() {
  return (
    <ul role="list" className="divide-y divide-gray-100 ml-48">
      <CandidateItem />
      <CandidateItem />
      <CandidateItem />
      <CandidateItem />
    </ul>
  );
}

export default CandidateList;