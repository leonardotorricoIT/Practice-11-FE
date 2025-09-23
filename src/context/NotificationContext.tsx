import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import type { NotificationData, NotificationType } from "../types/Notification";

type NotificationContextType = {
  notification: NotificationData | null;
  showNotification: (message: string, type?: NotificationType) => void;
  clearNotification: () => void;
};

export const NotificationContext = createContext<NotificationContextType>({
  notification: null,
  showNotification: () => {},
  clearNotification: () => {},
});

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notification, setNotification] = useState<NotificationData | null>(
    null
  );

  const showNotification = useCallback(
    (message: string, type: NotificationType = "info") => {
      setNotification({ message, type });
    },
    []
  );

  const clearNotification = useCallback(() => {
    setNotification(null);
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        clearNotification();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification, clearNotification]);

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, clearNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error(
      "useNotifications must be used within Notificationprovider"
    );
  return context;
}
