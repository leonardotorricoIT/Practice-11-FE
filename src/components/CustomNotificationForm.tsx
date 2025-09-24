import { useState } from "react";
import { useNotifications } from "../context/NotificationContext";
import type { Type } from "../types/Notification";

export default function CustomNotificationForm() {
  const { showNotification } = useNotifications();
  const [message, setMessage] = useState("");
  const [type, setType] = useState<Type>("info");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    showNotification(message, type);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 bg-gray-100 p-4 rounded shadow"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a custom message"
        className="border rounded px-3 py-2 w-full sm:w-auto flex-1"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value as Type)}
        className="border rounded px-3 py-2"
      >
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="error">Error</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Show Notification
      </button>
    </form>
  );
}
