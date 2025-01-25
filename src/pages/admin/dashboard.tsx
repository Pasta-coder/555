import { useState } from "react";

const AdminDashboard = () => {
  const [colleges, setColleges] = useState([
    { id: 1, name: "netaji subhash Tech University", students: 200, recruiters: 15 },
    { id: 2, name: "Business Institute", students: 150, recruiters: 10 },
  ]);

  const [collegeName, setCollegeName] = useState("");

  const handleAddCollege = () => {
    if (collegeName.trim()) {
      setColleges((prevColleges) => [
        ...prevColleges,
        { id: prevColleges.length + 1, name: collegeName, students: 0, recruiters: 0 },
      ]);
      setCollegeName("");
    }
  };

  const handleRemoveCollege = (collegeId: number) => {
    setColleges((prevColleges) => prevColleges.filter((college) => college.id !== collegeId));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Colleges</h2>
        <ul>
          {colleges.map((college) => (
            <li key={college.id} className="mb-2">
              {college.name} - {college.students} Students, {college.recruiters} Recruiters
              <button
                className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => handleRemoveCollege(college.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            placeholder="College Name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            className="mr-2 p-2 border rounded"
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAddCollege}
          >
            Add College
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
