export type NotificationType = "success" | "error" | "info";

export type NotificationData = {
  message: string;
  type: NotificationType;
};
