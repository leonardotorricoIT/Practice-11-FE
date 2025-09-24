export type Type = "success" | "error" | "info";

export interface NotificationData {
  id: number;
  message: string;
  type: Type;
  duration?: number;
}
