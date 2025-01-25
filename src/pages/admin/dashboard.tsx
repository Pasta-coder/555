import { useEffect, useState } from "react";
import { getColleges } from "@/firebase/firestore";

const AdminDashboard = () => {
  const [colleges, setColleges] = useState<any[]>([]);

  useEffect(() => {
    const fetchColleges = async () => {
      const data = await getColleges();
      setColleges(data);
    };

    fetchColleges();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <h2 className="text-xl font-semibold mb-2">Colleges</h2>
      <ul>
        {colleges.map((college) => (
          <li key={college.id} className="mb-2">
            {college.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
