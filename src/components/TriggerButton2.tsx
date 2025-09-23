import { useNotifications } from "../context/NotificationContext";

export default function TriggerButton2() {
  const { showNotification } = useNotifications();

  return (
    <button
      onClick={() => showNotification("Error occurred in navbar!", "error")}
      className="px-4 py-2 bg-red-600 text-white rounded"
    >
      Trigger Notification (Navbar)
    </button>
  );
}
