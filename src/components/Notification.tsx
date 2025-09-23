import { useNotifications } from "../context/NotificationContext";

const typeStyles: Record<string, string> = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  info: "bg-blue-500 text-white",
};

export default function Notification() {
  const { notification, clearNotification } = useNotifications();

  if (!notification) return null;

  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 rounded shadow-lg flex items-center justify-between min-w-[200px] ${
        typeStyles[notification.type] || typeStyles.info
      }`}
    >
      <span>{notification.message}</span>
      <button
        onClick={clearNotification}
        className="ml-3 font-bold text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
