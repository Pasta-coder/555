// import React, { useState } from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

// const analytics = () => {
//   // Sample data (Replace with actual API calls in the future)
//   const [year, setYear] = useState("2025");
//   const [department, setDepartment] = useState("All");
//   const [company, setCompany] = useState("All");

//   const totalStudents = 200;
//   const placedStudents = 120;
//   const placementRate = ((placedStudents / totalStudents) * 100).toFixed(2);

//   const jobsPosted = 50;
//   const applicationsReceived = 450;

//   const barData = {
//     labels: ["Software Engineer", "Data Analyst", "Product Manager", "Backend Developer", "Marketing Intern"],
//     datasets: [
//       {
//         label: "Applications Received",
//         data: [120, 90, 60, 100, 80],
//         backgroundColor: "#3b82f6",
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["Placed", "Not Placed"],
//     datasets: [
//       {
//         data: [placedStudents, totalStudents - placedStudents],
//         backgroundColor: ["#22c55e", "#ef4444"],
//       },
//     ],
//   };

//   const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => setYear(event.target.value);
//   const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => setDepartment(event.target.value);
//   const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => setCompany(event.target.value);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>

//       {/* Filters Section */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <div>
//           <label htmlFor="year" className="block font-semibold mb-1">Year</label>
//           <select
//             id="year"
//             value={year}
//             onChange={handleYearChange}
//             className="border rounded p-2"
//           >
//             <option value="2025">2025</option>
//             <option value="2024">2024</option>
//             <option value="2023">2023</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="department" className="block font-semibold mb-1">Department</label>
//           <select
//             id="department"
//             value={department}
//             onChange={handleDepartmentChange}
//             className="border rounded p-2"
//           >
//             <option value="All">All</option>
//             <option value="Computer Science">Computer Science</option>
//             <option value="Mechanical">Mechanical</option>
//             <option value="Electrical">Electrical</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="company" className="block font-semibold mb-1">Company</label>
//           <select
//             id="company"
//             value={company}
//             onChange={handleCompanyChange}
//             className="border rounded p-2"
//           >
//             <option value="All">All</option>
//             <option value="Google">Google</option>
//             <option value="Microsoft">Microsoft</option>
//             <option value="Amazon">Amazon</option>
//           </select>
//         </div>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         <div className="p-4 bg-white border rounded shadow">
//           <h2 className="text-lg font-semibold mb-2">Total Students</h2>
//           <p className="text-2xl font-bold">{totalStudents}</p>
//         </div>
//         <div className="p-4 bg-white border rounded shadow">
//           <h2 className="text-lg font-semibold mb-2">Placed Students</h2>
//           <p className="text-2xl font-bold">{placedStudents}</p>
//         </div>
//         <div className="p-4 bg-white border rounded shadow">
//           <h2 className="text-lg font-semibold mb-2">Placement Rate</h2>
//           <p className="text-2xl font-bold">{placementRate}%</p>
//         </div>
//         <div className="p-4 bg-white border rounded shadow">
//           <h2 className="text-lg font-semibold mb-2">Jobs Posted</h2>
//           <p className="text-2xl font-bold">{jobsPosted}</p>
//         </div>
//         <div className="p-4 bg-white border rounded shadow">
//           <h2 className="text-lg font-semibold mb-2">Applications Received</h2>
//           <p className="text-2xl font-bold">{applicationsReceived}</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Bar Chart */}
//         <div className="p-4 bg-white border rounded shadow">
//           <h2 className="text-lg font-semibold mb-4">Applications per Job</h2>
//           <Bar data={barData} />
//         </div>

//         {/* Pie Chart */}
//         <div className="p-4 bg-white border rounded shadow">
//           <h2 className="text-lg font-semibold mb-4">Placement Status</h2>
//           <Pie data={pieData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default analytics;


import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import Style from "@/styles/AdminAnalytics.module.css";


ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const Analytics = () => {
  const [year, setYear] = useState("2025");
  const [department, setDepartment] = useState("All");
  const [company, setCompany] = useState("All");

  const totalStudents = 200;
  const placedStudents = 120;
  const placementRate = ((placedStudents / totalStudents) * 100).toFixed(2);

  const jobsPosted = 50;
  const applicationsReceived = 450;

  const barData = {
    labels: ["Software Engineer", "Data Analyst", "Product Manager", "Backend Developer", "Marketing Intern"],
    datasets: [
      {
        label: "Applications Received",
        data: [120, 90, 60, 100, 80],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const pieData = {
    labels: ["Placed", "Not Placed"],
    datasets: [
      {
        data: [placedStudents, totalStudents - placedStudents],
        backgroundColor: ["#22c55e", "#ef4444"],
      },
    ],
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => setYear(event.target.value);
  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => setDepartment(event.target.value);
  const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => setCompany(event.target.value);

  return (
    <div className="analytics-container">
      <h1 className="dashboard-title">Analytics Dashboard</h1>

      <div className="filters-section">
        <div className="filter-group">
          <label htmlFor="year" className="filter-label">Year</label>
          <select
            id="year"
            value={year}
            onChange={handleYearChange}
            className="filter-select"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="department" className="filter-label">Department</label>
          <select
            id="department"
            value={department}
            onChange={handleDepartmentChange}
            className="filter-select"
          >
            <option value="All">All</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electrical">Electrical</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="company" className="filter-label">Company</label>
          <select
            id="company"
            value={company}
            onChange={handleCompanyChange}
            className="filter-select"
          >
            <option value="All">All</option>
            <option value="Google">Google</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Amazon">Amazon</option>
          </select>
        </div>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <h2 className="summary-card-title">Total Students</h2>
          <p className="summary-card-value">{totalStudents}</p>
        </div>
        <div className="summary-card">
          <h2 className="summary-card-title">Placed Students</h2>
          <p className="summary-card-value">{placedStudents}</p>
        </div>
        <div className="summary-card">
          <h2 className="summary-card-title">Placement Rate</h2>
          <p className="summary-card-value">{placementRate}%</p>
        </div>
        <div className="summary-card">
          <h2 className="summary-card-title">Jobs Posted</h2>
          <p className="summary-card-value">{jobsPosted}</p>
        </div>
        <div className="summary-card">
          <h2 className="summary-card-title">Applications Received</h2>
          <p className="summary-card-value">{applicationsReceived}</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h2 className="chart-title">Applications per Job</h2>
          <Bar data={barData} />
        </div>

        <div className="chart-card">
          <h2 className="chart-title">Placement Status</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;