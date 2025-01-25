
//

import Notifications from "@/components/Notifications";

<Notifications />

//

// import { useState } from "react";

// const RecruiterDashboard = () => {
//   const [applicants, setApplicants] = useState([
//     { id: 1, name: "jayant chauhan", job: "Software Engineer", status: "Pending" },
//     { id: 2, name: "virat kohli", job: "Data Analyst", status: "Shortlisted" },
//     { id: 3, name: "messi ", job: "Software Engineer", status: "Rejected" },
//   ]);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [filter, setFilter] = useState("All");

//   const handleAction = (applicantId: number, action: "Shortlisted" | "Rejected") => {
//     setApplicants((prevApplicants) =>
//       prevApplicants.map((applicant) =>
//         applicant.id === applicantId ? { ...applicant, status: action } : applicant
//       )
//     );
//   };

//   const filteredApplicants = applicants.filter((applicant) => {
//     const matchesSearch = applicant.name
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchesFilter =
//       filter === "All" ||
//       (filter === "Pending" && applicant.status === "Pending") ||
//       (filter === "Shortlisted" && applicant.status === "Shortlisted") ||
//       (filter === "Rejected" && applicant.status === "Rejected");
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Recruiter Dashboard</h1>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">Applicants</h2>
//         <div className="flex items-center gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Search applicants..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="p-2 border rounded w-1/3"
//           />
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="All">All</option>
//             <option value="Pending">Pending</option>
//             <option value="Shortlisted">Shortlisted</option>
//             <option value="Rejected">Rejected</option>
//           </select>
//         </div>
//         <ul>
//           {filteredApplicants.map((applicant) => (
//             <li key={applicant.id} className="mb-4">
//               <div>
//                 <strong>{applicant.name}</strong> applied for{" "}
//                 <strong>{applicant.job}</strong> -{" "}
//                 <span
//                   className={`${
//                     applicant.status === "Shortlisted"
//                       ? "text-green-500"
//                       : applicant.status === "Rejected"
//                       ? "text-red-500"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   {applicant.status}
//                 </span>
//               </div>
//               {applicant.status === "Pending" && (
//                 <div className="mt-2">
//                   <button
//                     className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
//                     onClick={() => handleAction(applicant.id, "Shortlisted")}
//                   >
//                     Shortlist
//                   </button>
//                   <button
//                     className="px-4 py-2 bg-red-500 text-white rounded"
//                     onClick={() => handleAction(applicant.id, "Rejected")}
//                   >
//                     Reject
//                   </button>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//         {filteredApplicants.length === 0 && (
//           <p className="text-gray-500">No applicants match your criteria.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default RecruiterDashboard;


// pages/recruiter/dashboard.tsx
import { useState } from 'react';
import styles from '@/styles/RecruiterDashboard.module.css';

// TypeScript Interfaces
interface JobPosting {
  id: number;
  title: string;
  company: string;
  requiredFields: string[];
  applicationFields: Record<string, string>;
  applicants: Applicant[];
  status: 'Open' | 'Closed';
}

interface Applicant {
  id: number;
  name: string;
  email: string;
  applicationDetails: Record<string, string>;
  status: 'Applied' | 'Shortlisted' | 'Rejected' | 'Selected';
}

const RecruiterDashboard = () => {
  // State Management
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Innovations',
      requiredFields: ['Resume', 'Experience', 'Skills'],
      applicationFields: {},
      applicants: [],
      status: 'Open'
    }
  ]);

  const [newJobPosting, setNewJobPosting] = useState<Partial<JobPosting>>({
    title: '',
    requiredFields: []
  });

  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  // Job Posting Methods
  const handleCreateJobPosting = () => {
    if (newJobPosting.title && newJobPosting.requiredFields?.length) {
      const newJob: JobPosting = {
        ...newJobPosting,
        id: Date.now(),
        company: 'Your Company',
        applicants: [],
        status: 'Open'
      } as JobPosting;

      setJobPostings(prev => [...prev, newJob]);
      setNewJobPosting({ title: '', requiredFields: [] });
    }
  };

  const addRequiredField = () => {
    setNewJobPosting(prev => ({
      ...prev,
      requiredFields: [...prev.requiredFields || [], '']
    }));
  };

  // Applicant Management
  const updateApplicantStatus = (jobId: number, applicantId: number, newStatus: Applicant['status']) => {
    setJobPostings(prev => 
      prev.map(job => 
        job.id === jobId 
          ? {...job, 
              applicants: job.applicants.map(applicant => 
                applicant.id === applicantId 
                  ? {...applicant, status: newStatus} 
                  : applicant
              )
            }
          : job
      )
    );
  };

  // Result Announcement
  const announceResults = (jobId: number) => {
    setJobPostings(prev => 
      prev.map(job => 
        job.id === jobId 
          ? {
              ...job, 
              status: 'Closed',
              applicants: job.applicants.map(applicant => 
                applicant.status === 'Shortlisted' 
                  ? {...applicant, status: 'Selected'}
                  : applicant
              )
            }
          : job
      )
    );
  };

  return (
    <div className={styles.container}>
      {/* Job Posting Section */}
      <section className={styles.jobPostingSection}>
        <h2 className={styles.sectionTitle}>Create Job Posting</h2>
        <div className={styles.jobPostingForm}>
          <input 
            placeholder="Job Title"
            value={newJobPosting.title || ''}
            onChange={(e) => setNewJobPosting(prev => ({...prev, title: e.target.value}))}
            className={styles.input}
          />
          {newJobPosting.requiredFields?.map((field, index) => (
            <input 
              key={index}
              placeholder={`Required Field ${index + 1}`}
              value={field}
              onChange={(e) => {
                const newFields = [...(newJobPosting.requiredFields || [])];
                newFields[index] = e.target.value;
                setNewJobPosting(prev => ({...prev, requiredFields: newFields}));
              }}
              className={styles.input}
            />
          ))}
          <button onClick={addRequiredField} className={styles.secondaryButton}>
            Add Field
          </button>
          <button onClick={handleCreateJobPosting} className={styles.primaryButton}>
            Create Job Posting
          </button>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className={styles.jobListingsSection}>
        <h2 className={styles.sectionTitle}>Job Listings</h2>
        {jobPostings.map(job => (
          <div key={job.id} className={styles.jobCard}>
            <h3>{job.title}</h3>
            <p>Status: {job.status}</p>
            <button 
              onClick={() => setSelectedJob(job)} 
              className={styles.secondaryButton}
            >
              View Applicants
            </button>
          </div>
        ))}
      </section>

      {/* Applicant Management Modal */}
      {selectedJob && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Applicants for {selectedJob.title}</h2>
            {selectedJob.applicants.map(applicant => (
              <div key={applicant.id} className={styles.applicantCard}>
                <h3>{applicant.name}</h3>
                <p>Status: {applicant.status}</p>
                <div className={styles.actionButtons}>
                  <button 
                    onClick={() => updateApplicantStatus(selectedJob.id, applicant.id, 'Shortlisted')}
                    className={styles.primaryButton}
                  >
                    Shortlist
                  </button>
                  <button 
                    onClick={() => updateApplicantStatus(selectedJob.id, applicant.id, 'Rejected')}
                    className={styles.dangerButton}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
            <button 
              onClick={() => announceResults(selectedJob.id)}
              className={styles.primaryButton}
            >
              Announce Final Results
            </button>
            <button 
              onClick={() => setSelectedJob(null)}
              className={styles.secondaryButton}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruiterDashboard;