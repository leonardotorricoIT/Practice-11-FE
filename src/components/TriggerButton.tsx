import { useNotifications } from "../context/NotificationContext";

export default function TriggerButton() {
  const { showNotification } = useNotifications();

  return (
    <button
      onClick={() => showNotification("Item saved successfully!", "success")}
      className="px-4 py-2 bg-green-600 text-white rounded"
    >
      Trigger Notification (Main)
    </button>
  );
}
