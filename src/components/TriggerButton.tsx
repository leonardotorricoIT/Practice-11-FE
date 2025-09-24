import { useNotifications } from "../context/NotificationContext";

export default function TriggerButton() {
  const { showNotification } = useNotifications();
  return (
    <button
      onClick={() =>
        showNotification("Component trigger button clicked", "success")
      }
      className="bg-retro-green button-brutalist"
    >
      Component trigger button
    </button>
  );
}
