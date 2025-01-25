import { useState, useEffect } from "react";

type Notification = {
  id: number;
  message: string;
  timestamp: string;
};

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulated data fetch
    const initialNotifications = [
      { id: 1, message: "Job 'Software Engineer' has been posted.", timestamp: "2025-01-25 10:00 AM" },
      { id: 2, message: "Your application for 'Backend Developer' has been shortlisted.", timestamp: "2025-01-24 05:30 PM" },
    ];
    setNotifications(initialNotifications);
  }, []);

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h3 className="text-lg font-bold mb-2">Notifications</h3>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications yet.</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((notification) => (
            <li key={notification.id} className="p-2 bg-gray-100 rounded">
              <p>{notification.message}</p>
              <p className="text-sm text-gray-500">{notification.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
