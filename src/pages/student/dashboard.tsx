// import { useEffect, useState } from "react";
// import { auth } from "@/firebase/firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";

// const StudentDashboard = () => {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
//       {user ? <p>Welcome, {user.email}</p> : <p>Please log in to view your dashboard.</p>}
//     </div>
//   );
// };

// export default StudentDashboard;
// import { useState } from "react";

// const StudentDashboard = () => {
//   const [profile, setProfile] = useState({
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     resume: "Resume.pdf",
//   });

//   const [jobs, setJobs] = useState([
//     { id: 1, title: "Software Engineer", company: "ABC Corp", status: "Applied" },
//     { id: 2, title: "Data Analyst", company: "XYZ Ltd", status: "Not Applied" },
//   ]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Profile</h2>
//         <p>Name: {profile.name}</p>
//         <p>Email: {profile.email}</p>
//         <p>Resume: <a href="#">{profile.resume}</a></p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">Job Listings</h2>
//         <ul>
//           {jobs.map((job) => (
//             <li key={job.id} className="mb-2">
//               {job.title} at {job.company} - 
//               <span className={`ml-2 ${job.status === "Applied" ? "text-green-500" : "text-gray-500"}`}>
//                 {job.status}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default StudentDashboard;

//
//import Notifications from "@/components/Notifications";

//<Notifications />
//

// import { useState } from "react";

// const StudentDashboard = () => {
//   const [profile] = useState({
//     name: "jayant chauhan",
//     email: "123@example.com",
//     resume: "Resume.pdf",
//   });

//   const [jobs, setJobs] = useState([
//     { id: 1, title: "Software Engineer", company: "ABC Corp", status: "Not Applied" },
//     { id: 2, title: "Data Analyst", company: "XYZ Ltd", status: "Not Applied" },
//     { id: 3, title: "Backend Developer", company: "Tech Solutions", status: "Applied" },
//   ]);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [filter, setFilter] = useState("All");

//   const handleApply = (jobId: number) => {
//     setJobs((prevJobs) =>
//       prevJobs.map((job) =>
//         job.id === jobId ? { ...job, status: "Applied" } : job
//       )
//     );
//   };

//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesFilter =
//       filter === "All" ||
//       (filter === "Applied" && job.status === "Applied") ||
//       (filter === "Not Applied" && job.status === "Not Applied");
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Profile</h2>
//         <p>Name: {profile.name}</p>
//         <p>Email: {profile.email}</p>
//         <p>
//           Resume: <a href="#">{profile.resume}</a>
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold mb-2">Job Listings</h2>
//         <div className="flex items-center gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Search jobs..."
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
//             <option value="Applied">Applied</option>
//             <option value="Not Applied">Not Applied</option>
//           </select>
//         </div>
//         <ul>
//           {filteredJobs.map((job) => (
//             <li key={job.id} className="mb-4">
//               <div>
//                 <strong>{job.title}</strong> at {job.company} -{" "}
//                 <span
//                   className={`${
//                     job.status === "Applied" ? "text-green-500" : "text-gray-500"
//                   }`}
//                 >
//                   {job.status}
//                 </span>
//               </div>
//               {job.status === "Not Applied" && (
//                 <button
//                   className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
//                   onClick={() => handleApply(job.id)}
//                 >
//                   Apply
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//         {filteredJobs.length === 0 && (
//           <p className="text-gray-500">No jobs match your criteria.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default StudentDashboard;





import Notifications from "@/components/Notifications";

<Notifications />
// import { useState } from "react";
// import styles from '../../styles/StudentDashboard.module.css';

// const StudentDashboard = () => {
//   const [profile] = useState({
//     name: "jayant chauhan",
//     email: "123@example.com",
//     resume: "Resume.pdf",
//   });

//   const [jobs, setJobs] = useState([
//     { id: 1, title: "Software Engineer", company: "ABC Corp", status: "Not Applied" },
//     { id: 2, title: "Data Analyst", company: "XYZ Ltd", status: "Not Applied" },
//     { id: 3, title: "Backend Developer", company: "Tech Solutions", status: "Applied" },
//   ]);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [filter, setFilter] = useState("All");

//   const handleApply = (jobId: number) => {
//     setJobs((prevJobs) =>
//       prevJobs.map((job) =>
//         job.id === jobId ? { ...job, status: "Applied" } : job
//       )
//     );
//   };

//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesFilter =
//       filter === "All" ||
//       (filter === "Applied" && job.status === "Applied") ||
//       (filter === "Not Applied" && job.status === "Not Applied");
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.pageTitle}>Student Dashboard</h1>

//       <section className={styles.profileSection}>
//         <h2 className={styles.sectionTitle}>Profile</h2>
//         <p>Name: {profile.name}</p>
//         <p>Email: {profile.email}</p>
//         <p>
//           Resume: <a href="#">{profile.resume}</a>
//         </p>
//       </section>

//       <section>
//         <h2 className={styles.sectionTitle}>Job Listings</h2>
//         <div className={styles.searchContainer}>
//           <input
//             type="text"
//             placeholder="Search jobs..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className={styles.searchInput}
//           />
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className={styles.filterSelect}
//           >
//             <option value="All">All</option>
//             <option value="Applied">Applied</option>
//             <option value="Not Applied">Not Applied</option>
//           </select>
//         </div>
//         <ul className={styles.jobList}>
//           {filteredJobs.map((job) => (
//             <li key={job.id} className={styles.jobItem}>
//               <div>
//                 <strong>{job.title}</strong> at {job.company} -{" "}
//                 <span
//                   className={
//                     job.status === "Applied" 
//                       ? styles.appliedStatus 
//                       : styles.jobStatus
//                   }
//                 >
//                   {job.status}
//                 </span>
//               </div>
//               {job.status === "Not Applied" && (
//                 <button
//                   className={styles.applyButton}
//                   onClick={() => handleApply(job.id)}
//                 >
//                   Apply
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//         {filteredJobs.length === 0 && (
//           <p className={styles.noJobsMessage}>No jobs match your criteria.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default StudentDashboard;

// pages/student/dashboard.tsx
import { useState, useEffect } from 'react';
import styles from '@/styles/StudentDashboard.module.css';

// Types for better type safety
interface Profile {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  resume: File | null;
}

interface Job {
  id: number;
  title: string;
  company: string;
  status: 'Not Applied' | 'Applied' | 'Interview' | 'Rejected';
  interviewPrep?: InterviewPrepResource[];
}

interface InterviewPrepResource {
  id: number;
  company: string;
  topic: string;
  description: string;
  link?: string;
}

const StudentDashboard = () => {
  // State Management
  const [profile, setProfile] = useState<Profile>({
    name: '',
    email: '',
    phone: '',
    skills: [],
    resume: null
  });

  const [jobs, setJobs] = useState<Job[]>([
    { 
      id: 1, 
      title: 'Software Engineer', 
      company: 'Tech Innovations', 
      status: 'Not Applied',
      interviewPrep: [
        {
          id: 1,
          company: 'Tech Innovations',
          topic: 'Data Structures',
          description: 'Comprehensive DSA preparation guide',
          link: '#'
        }
      ]
    },
    { 
      id: 2, 
      title: 'Data Analyst', 
      company: 'Data Solutions', 
      status: 'Not Applied' 
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Profile Management
  const handleProfileEdit = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const handleProfileSave = (updatedProfile: Partial<Profile>) => {
    setProfile(prev => ({...prev, ...updatedProfile}));
    setIsEditingProfile(false);
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfile(prev => ({...prev, resume: file}));
    }
  };

  // Job Application Methods
  const handleApply = (jobId: number) => {
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === jobId ? {...job, status: 'Applied'} : job
      )
    );
  };

  // Filtering Jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      filter === 'All' || 
      (filter === job.status);
    return matchesSearch && matchesFilter;
  });

  // Progress Calculation
  const calculateProgress = () => {
    const totalJobs = jobs.length;
    const appliedJobs = jobs.filter(job => job.status === 'Applied').length;
    const interviewJobs = jobs.filter(job => job.status === 'Interview').length;
    
    return {
      totalApplications: totalJobs,
      appliedApplications: appliedJobs,
      interviewApplications: interviewJobs
    };
  };

  return (
    <div className={styles.container}>
      {/* Profile Section */}
      <section className={styles.profileSection}>
        <h2 className={styles.sectionTitle}>
          Profile 
          <button onClick={handleProfileEdit} className={styles.editButton}>
            {isEditingProfile ? 'Cancel' : 'Edit'}
          </button>
        </h2>
        
        {isEditingProfile ? (
          <div>
            <input 
              placeholder="Name" 
              value={profile.name}
              onChange={(e) => handleProfileSave({name: e.target.value})}
            />
            {/* Add similar inputs for other profile fields */}
            <input 
              type="file" 
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
            />
          </div>
        ) : (
          <div>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Resume: {profile.resume ? profile.resume.name : 'Not uploaded'}</p>
          </div>
        )}
      </section>

      {/* Dashboard Progress */}
      <section className={styles.dashboardProgress}>
        <h2 className={styles.sectionTitle}>Dashboard Progress</h2>
        <div>
          <p>Total Jobs: {calculateProgress().totalApplications}</p>
          <p>Applied: {calculateProgress().appliedApplications}</p>
          <p>Interview Calls: {calculateProgress().interviewApplications}</p>
        </div>
      </section>

      {/* Job Listings */}
      <section className={styles.jobListingSection}>
        <h2 className={styles.sectionTitle}>Job Listings</h2>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="All">All Status</option>
            <option value="Not Applied">Not Applied</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
          </select>
        </div>

        <ul className={styles.jobList}>
          {filteredJobs.map((job) => (
            <li key={job.id} className={styles.jobItem}>
              <div>
                <strong>{job.title}</strong> at {job.company}
                <span className={styles.jobStatus}>{job.status}</span>
              </div>
              {job.status === 'Not Applied' && (
                <button 
                  className={styles.applyButton}
                  onClick={() => handleApply(job.id)}
                >
                  Apply
                </button>
              )}
              {job.interviewPrep && (
                <div className={styles.interviewPrepSection}>
                  <h3>Interview Preparation</h3>
                  {job.interviewPrep.map(prep => (
                    <div key={prep.id}>
                      <p>{prep.topic}</p>
                      <a href={prep.link}>Preparation Resources</a>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudentDashboard;
