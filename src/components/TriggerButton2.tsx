import { useNotifications } from "../context/NotificationContext";

export default function TriggerButton2() {
  const { showNotification } = useNotifications();

  return (
    <button
      onClick={() => showNotification("Error in trigger button 2", "error")}
      className="bg-retro-pink button-brutalist"
    >
      Trigger button 2
    </button>
  );
}
