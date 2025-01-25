// import { useState } from "react";

// const AdminDashboard = () => {
//   const [colleges, setColleges] = useState([
//     { id: 1, name: "netaji subhash Tech University", students: 200, recruiters: 15 },
//     { id: 2, name: "Business Institute", students: 150, recruiters: 10 },
//   ]);

//   const [collegeName, setCollegeName] = useState("");

//   const handleAddCollege = () => {
//     if (collegeName.trim()) {
//       setColleges((prevColleges) => [
//         ...prevColleges,
//         { id: prevColleges.length + 1, name: collegeName, students: 0, recruiters: 0 },
//       ]);
//       setCollegeName("");
//     }
//   };

//   const handleRemoveCollege = (collegeId: number) => {
//     setColleges((prevColleges) => prevColleges.filter((college) => college.id !== collegeId));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

//       <section className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Colleges</h2>
//         <ul>
//           {colleges.map((college) => (
//             <li key={college.id} className="mb-2">
//               {college.name} - {college.students} Students, {college.recruiters} Recruiters
//               <button
//                 className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
//                 onClick={() => handleRemoveCollege(college.id)}
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-4">
//           <input
//             type="text"
//             placeholder="College Name"
//             value={collegeName}
//             onChange={(e) => setCollegeName(e.target.value)}
//             className="mr-2 p-2 border rounded"
//           />
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//             onClick={handleAddCollege}
//           >
//             Add College
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminDashboard;


// pages/admin/dashboard.tsx
import { useState, useRef } from 'react';
import styles from '@/styles/AdminDashboard.module.css';

interface College {
  id: number;
  name: string;
  students: number;
  recruiters: number;
  logo?: string;
  brandingColors?: {
    primary: string;
    secondary: string;
  };
  placementPolicies?: string[];
  requirementSpecifications?: {
    eligibilityCriteria?: string[];
    documentTemplates?: string[];
  };
}

interface Student {
  id: number;
  name: string;
  collegeId: number;
  placementStatus: 'Placed' | 'Not Placed';
  company?: string;
}

interface Recruiter {
  id: number;
  name: string;
  company: string;
  collegeId: number;
}

const AdminDashboard = () => {
  const [colleges, setColleges] = useState<College[]>([
    { 
      id: 1, 
      name: "Netaji Subhash Tech University", 
      students: 200, 
      recruiters: 15,
      placementPolicies: ['Minimum CGPA 7.5', 'No Active Backlogs'],
      requirementSpecifications: {
        eligibilityCriteria: ['B.Tech in Computer Science', 'CGPA > 7.5'],
        documentTemplates: ['Resume Template', 'NOC Template']
      }
    }
  ]);

  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Jayant Chauhan", collegeId: 1, placementStatus: 'Placed', company: 'Tech Solutions' }
  ]);

  const [recruiters, setRecruiters] = useState<Recruiter[]>([
    { id: 1, name: "John Doe", company: "Tech Solutions", collegeId: 1 }
  ]);

  const [collegeName, setCollegeName] = useState("");
  const [activeSection, setActiveSection] = useState<'colleges' | 'students' | 'recruiters' | 'requirements'>('colleges');
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const handleAddCollege = () => {
    if (collegeName.trim()) {
      const newCollege: College = {
        id: Date.now(),
        name: collegeName,
        students: 0,
        recruiters: 0,
        placementPolicies: [],
        requirementSpecifications: {}
      };
      setColleges(prev => [...prev, newCollege]);
      setCollegeName("");
    }
  };

  const handleCollegeLogoUpload = (collegeId: number) => {
    const input = logoInputRef.current;
    if (input && input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setColleges(prev => 
          prev.map(college => 
            college.id === collegeId 
              ? {...college, logo: reader.result as string} 
              : college
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateCollegeBranding = (collegeId: number, colors: College['brandingColors']) => {
    setColleges(prev => 
      prev.map(college => 
        college.id === collegeId 
          ? {...college, brandingColors: colors} 
          : college
      )
    );
  };

  const renderDashboardSection = () => {
    switch (activeSection) {
      case 'colleges':
        return (
          <div className={styles.collegeSection}>
            <h2>Colleges Management</h2>
            {colleges.map(college => (
              <div key={college.id} className={styles.collegeCard}>
                <div>
                  <strong>{college.name}</strong>
                  <p>{college.students} Students, {college.recruiters} Recruiters</p>
                </div>
                <div>
                  <button onClick={() => setSelectedCollege(college)}>
                    Customize
                  </button>
                  <button onClick={() => handleRemoveCollege(college.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className={styles.addCollegeForm}>
              <input
                type="text"
                placeholder="College Name"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              />
              <button onClick={handleAddCollege}>Add College</button>
            </div>
          </div>
        );
      case 'students':
        return (
          <div className={styles.studentsSection}>
            <h2>Students Management</h2>
            {students.map(student => (
              <div key={student.id} className={styles.studentCard}>
                <p>{student.name}</p>
                <p>Status: {student.placementStatus}</p>
                {student.company && <p>Company: {student.company}</p>}
              </div>
            ))}
          </div>
        );
      case 'recruiters':
        return (
          <div className={styles.recruitersSection}>
            <h2>Recruiters Management</h2>
            {recruiters.map(recruiter => (
              <div key={recruiter.id} className={styles.recruiterCard}>
                <p>{recruiter.name}</p>
                <p>Company: {recruiter.company}</p>
              </div>
            ))}
          </div>
        );
      case 'requirements':
        return (
          <div className={styles.requirementsSection}>
            <h2>Placement Requirements</h2>
            {colleges.map(college => (
              <div key={college.id} className={styles.requirementCard}>
                <h3>{college.name} Requirements</h3>
                <div>
                  <strong>Eligibility Criteria:</strong>
                  <ul>
                    {college.requirementSpecifications?.eligibilityCriteria?.map((criteria, index) => (
                      <li key={index}>{criteria}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Document Templates:</strong>
                  <ul>
                    {college.requirementSpecifications?.documentTemplates?.map((template, index) => (
                      <li key={index}>{template}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  const handleRemoveCollege = (collegeId: number) => {
    setColleges((prevColleges) => prevColleges.filter((college) => college.id !== collegeId));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Admin Dashboard</h1>
      
      <div className={styles.navigationTabs}>
        <button onClick={() => setActiveSection('colleges')}>Colleges</button>
        <button onClick={() => setActiveSection('students')}>Students</button>
        <button onClick={() => setActiveSection('recruiters')}>Recruiters</button>
        <button onClick={() => setActiveSection('requirements')}>Requirements</button>
      </div>

      {renderDashboardSection()}

      {selectedCollege && (
        <div className={styles.collegeCustomizationModal}>
          <div className={styles.modalContent}>
            <h2>Customize {selectedCollege.name}</h2>
            <div>
              <input 
                type="file" 
                ref={logoInputRef}
                onChange={() => handleCollegeLogoUpload(selectedCollege.id)}
              />
              {selectedCollege.logo && (
                <img src={selectedCollege.logo} alt="College Logo" />
              )}
            </div>
            <div>
              <h3>Branding Colors</h3>
              <input 
                type="color" 
                value={selectedCollege.brandingColors?.primary || '#000000'}
                onChange={(e) => handleUpdateCollegeBranding(selectedCollege.id, {
                  primary: e.target.value,
                  secondary: selectedCollege.brandingColors?.secondary || '#FFFFFF'
                })}
              />
              <input 
                type="color" 
                value={selectedCollege.brandingColors?.secondary || '#FFFFFF'}
                onChange={(e) => handleUpdateCollegeBranding(selectedCollege.id, {
                  primary: selectedCollege.brandingColors?.primary || '#000000',
                  secondary: e.target.value
                })}
              />
            </div>
            <button onClick={() => setSelectedCollege(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;