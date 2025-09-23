import { createContext, useContext, useState } from "react";
import type { Notification } from "../types/Notification";

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (Notification: Notification) => void;
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (Notification: Notification) => {
    setNotifications((prev) => [...prev, Notification]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
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
