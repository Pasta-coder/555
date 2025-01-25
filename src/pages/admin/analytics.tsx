import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const AnalyticsDashboard = () => {
  // Sample data (Replace with actual API calls in the future)
  const totalStudents = 200;
  const placedStudents = 120;
  const placementRate = ((placedStudents / totalStudents) * 100).toFixed(2);

  const jobsPosted = 50;
  const applicationsReceived = 450;

  // Bar Chart Data for Job Applications per Job
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

  // Pie Chart Data for Placement Status
  const pieData = {
    labels: ["Placed", "Not Placed"],
    datasets: [
      {
        data: [placedStudents, totalStudents - placedStudents],
        backgroundColor: ["#22c55e", "#ef4444"],
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Summary Cards */}
        <div className="p-4 bg-white border rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Total Students</h2>
          <p className="text-2xl font-bold">{totalStudents}</p>
        </div>
        <div className="p-4 bg-white border rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Placed Students</h2>
          <p className="text-2xl font-bold">{placedStudents}</p>
        </div>
        <div className="p-4 bg-white border rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Placement Rate</h2>
          <p className="text-2xl font-bold">{placementRate}%</p>
        </div>
        <div className="p-4 bg-white border rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Jobs Posted</h2>
          <p className="text-2xl font-bold">{jobsPosted}</p>
        </div>
        <div className="p-4 bg-white border rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Applications Received</h2>
          <p className="text-2xl font-bold">{applicationsReceived}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="p-4 bg-white border rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Applications per Job</h2>
          <Bar data={barData} />
        </div>

        {/* Pie Chart */}
        <div className="p-4 bg-white border rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Placement Status</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
