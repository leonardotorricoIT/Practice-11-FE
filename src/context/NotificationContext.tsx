import { createContext, useState, useCallback, useContext } from "react";
import type { NotificationData, Type } from "../types/Notification";

type NotificationContextType = {
  notifications: NotificationData[];
  showNotification: (message: string, type?: Type, duration?: number) => void;
  clearNotification: (id: number) => void;
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  const showNotification = useCallback(
    (message: string, type: Type = "info", duration: number = 3000) => {
      const id = Date.now();
      const newNotification: NotificationData = { id, message, type, duration };

      setNotifications((prev) => [...prev, newNotification]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, duration);
    },
    []
  );

  const clearNotification = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, showNotification, clearNotification }}
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
