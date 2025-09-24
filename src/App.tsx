import Notification from "./components/Notification";
import TriggerButton from "./components/TriggerButton";
import TriggerButton2 from "./components/TriggerButton2";
import CustomNotificationForm from "./components/CustomNotificationForm";

export default function App() {
  return (
    <div className="p-6 space-y-6">
      <header className="flex justify-between items-center mb-6 bg-gray-100 p-4 rounded border-black border-2 shadow-[8px_8px_0px_0px_#000]">
        <h1 className="text-xl font-bold">Notification Context</h1>
        <TriggerButton2 />
      </header>

      <main className="space-y-6">
        <TriggerButton />
        <CustomNotificationForm />
      </main>

      <Notification />
    </div>
  );
}
