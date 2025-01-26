

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
  college: string;
  resumeLink: string;
  resume: File | null;
  githubProfile: string;
  leetcodeProfile: string;
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

const containerStyle: React.CSSProperties = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

const profileSectionStyle: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const sectionTitleStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #e0e0e0',
  paddingBottom: '10px',
  marginBottom: '15px'
};

const editButtonStyle: React.CSSProperties = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '4px',
  cursor: 'pointer'
};

const inputGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px'
};

const inputStyle: React.CSSProperties = {
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginTop: '5px'
};

const profileDetailsStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

const profileItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center'
};

const labelStyle: React.CSSProperties = {
  fontWeight: 'bold',
  width: '150px',
  marginRight: '10px'
};

const linkStyle: React.CSSProperties = {
  color: '#007bff',
  textDecoration: 'none'
};

const StudentDashboard = () => {
  // State Management
  const [profile, setProfile] = useState<Profile>({
    name: '',
    email: '',
    phone: '',
    skills: [],
    college: '',
    resumeLink: '',
    resume: null,
    githubProfile: '',
    leetcodeProfile: ''
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

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProfileSave({ 
        resumeLink: URL.createObjectURL(file) 
      });
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
      <section style={profileSectionStyle}>
        <h2 style={sectionTitleStyle}>
          Profile 
          <button 
            onClick={handleProfileEdit} 
            style={editButtonStyle}
          >
            {isEditingProfile ? 'Cancel' : 'Edit'}
          </button>
        </h2>
        
        {isEditingProfile ? (
          <div>
            <div style={inputGroupStyle}>
              <label>Name</label>
              <input 
                placeholder="Full Name" 
                value={profile.name}
                onChange={(e) => handleProfileSave({name: e.target.value})}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <label>Email</label>
              <input 
                placeholder="Email Address" 
                value={profile.email}
                onChange={(e) => handleProfileSave({email: e.target.value})}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <label>College</label>
              <input 
                placeholder="College Name" 
                value={profile.college}
                onChange={(e) => handleProfileSave({college: e.target.value})}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <label>Resume</label>
              <input 
                type="file" 
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <label>GitHub Profile</label>
              <input 
                placeholder="GitHub Profile URL" 
                value={profile.githubProfile}
                onChange={(e) => handleProfileSave({githubProfile: e.target.value})}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <label>LeetCode Profile</label>
              <input 
                placeholder="LeetCode Profile URL" 
                value={profile.leetcodeProfile}
                onChange={(e) => handleProfileSave({leetcodeProfile: e.target.value})}
                style={inputStyle}
              />
            </div>
            <button 
              onClick={() => setIsEditingProfile(false)}
              style={{
                ...editButtonStyle,
                marginTop: '10px'
              }}
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div style={profileDetailsStyle}>
            <div style={profileItemStyle}>
              <span style={labelStyle}>Name:</span>
              <span>{profile.name}</span>
            </div>
            <div style={profileItemStyle}>
              <span style={labelStyle}>Email:</span>
              <span>{profile.email}</span>
            </div>
            <div style={profileItemStyle}>
              <span style={labelStyle}>College:</span>
              <span>{profile.college}</span>
            </div>
            <div style={profileItemStyle}>
              <span style={labelStyle}>Resume:</span>
              <span>
                {profile.resumeLink ? (
                  <a 
                    href={profile.resumeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    View Resume
                  </a>
                ) : (
                  'Not uploaded'
                )}
              </span>
            </div>
            <div style={profileItemStyle}>
              <span style={labelStyle}>GitHub:</span>
              <span>
                {profile.githubProfile ? (
                  <a 
                    href={profile.githubProfile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    GitHub Profile
                  </a>
                ) : (
                  'Not provided'
                )}
              </span>
            </div>
            <div style={profileItemStyle}>
              <span style={labelStyle}>LeetCode:</span>
              <span>
                {profile.leetcodeProfile ? (
                  <a 
                    href={profile.leetcodeProfile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    LeetCode Profile
                  </a>
                ) : (
                  'Not provided'
                )}
              </span>
            </div>
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
