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
      className="flex flex-col sm:flex-row items-center gap-3 bg-gray-100 p-4 rounded  border-black border-2 shadow-[8px_8px_0px_0px_#000]"
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

      <button type="submit" className="bg-retro-blue button-brutalist">
        Show Notification
      </button>
    </form>
  );
}
