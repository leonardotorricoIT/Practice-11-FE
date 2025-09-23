import Notification from "./components/Notification";
import TriggerButton from "./components/TriggerButton";
import TriggerButton2 from "./components/TriggerButton2";

export default function App() {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6 bg-gray-100 p-4 rounded">
        <h1 className="text-xl font-bold">Notification System</h1>
        <TriggerButton2 />
      </header>

      <main>
        <TriggerButton />
      </main>

      <Notification />
    </div>
  );
}
