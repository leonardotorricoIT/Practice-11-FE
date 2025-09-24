import { useNotifications } from "../context/NotificationContext";

const typeStyles: Record<string, string> = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  info: "bg-blue-500 text-white",
};

export default function Notification() {
  const { notifications, clearNotification } = useNotifications();

  return (
    <div className="fixed top-4 right-4 flex flex-col gap-3">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`px-4 py-2 rounded shadow-lg flex items-center justify-between min-w-[200px] ${
            typeStyles[n.type] || typeStyles.info
          }`}
        >
          <span>{n.message}</span>
          <button
            onClick={() => clearNotification(n.id)}
            className="ml-3 font-bold text-lg leading-none"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}
