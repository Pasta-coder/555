
//

import Notifications from "@/components/Notifications";

<Notifications />

//

import { useState } from "react";

const RecruiterDashboard = () => {
  const [applicants, setApplicants] = useState([
    { id: 1, name: "jayant chauhan", job: "Software Engineer", status: "Pending" },
    { id: 2, name: "virat kohli", job: "Data Analyst", status: "Shortlisted" },
    { id: 3, name: "messi ", job: "Software Engineer", status: "Rejected" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAction = (applicantId: number, action: "Shortlisted" | "Rejected") => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === applicantId ? { ...applicant, status: action } : applicant
      )
    );
  };

  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch = applicant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "All" ||
      (filter === "Pending" && applicant.status === "Pending") ||
      (filter === "Shortlisted" && applicant.status === "Shortlisted") ||
      (filter === "Rejected" && applicant.status === "Rejected");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recruiter Dashboard</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Applicants</h2>
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search applicants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded w-1/3"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <ul>
          {filteredApplicants.map((applicant) => (
            <li key={applicant.id} className="mb-4">
              <div>
                <strong>{applicant.name}</strong> applied for{" "}
                <strong>{applicant.job}</strong> -{" "}
                <span
                  className={`${
                    applicant.status === "Shortlisted"
                      ? "text-green-500"
                      : applicant.status === "Rejected"
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  {applicant.status}
                </span>
              </div>
              {applicant.status === "Pending" && (
                <div className="mt-2">
                  <button
                    className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => handleAction(applicant.id, "Shortlisted")}
                  >
                    Shortlist
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => handleAction(applicant.id, "Rejected")}
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
        {filteredApplicants.length === 0 && (
          <p className="text-gray-500">No applicants match your criteria.</p>
        )}
      </section>
    </div>
  );
};

export default RecruiterDashboard;
