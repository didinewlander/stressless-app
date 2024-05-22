import { CalendarIcon, CheckIcon, TriangleAlertIcon } from "lucide-react";

export default function Home() {
  return (
    <main key="1" className="flex flex-col items-center justify-between max-h-screen px-4 py-8 md:px-6 lg:px-8 relative">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Hi Tom, great to see you</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Let's take a moment to check in and see how you're doing today.
        </p>
      </div>
      <div className="absolute bottom-0 w-full max-w-[600px]">
        <div className="absolute top-0 right-0 mt-4 mr-4 w-full max-w-md space-y-4">
          <div className="flex items-start justify-between rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                <CalendarIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Upcoming Appointment</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Tomorrow at 2:00 PM</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">May 22, 2024</p>
          </div>
          <div className="flex items-start justify-between rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Meditation Completed</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">20 minutes</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">May 21, 2024</p>
          </div>
          <div className="flex items-start justify-between rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
                <TriangleAlertIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Mood Check-in Overdue</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2 days ago</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">May 20, 2024</p>
          </div>
        </div>
      </div>
    </main>
  );
}
