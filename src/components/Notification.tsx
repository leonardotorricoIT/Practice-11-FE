import { useNotifications } from "../context/NotificationContext";

const typeStyles: Record<string, string> = {
  success: "bg-retro-green text-white",
  error: "bg-retro-pink text-white",
  info: "bg-retro-blue text-white",
};

export default function Notification() {
  const { notifications, clearNotification } = useNotifications();

  return (
    <div className="fixed top-4 right-4 flex flex-col gap-3 ">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`px-4 py-2 rounded  flex items-center justify-between min-w-[200px] border-black border-2 shadow-[8px_8px_0px_0px_#000] ${
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
