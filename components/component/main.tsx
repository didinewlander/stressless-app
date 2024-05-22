/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/yQez0YOb2oj
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function main() {
  return (
    <main key="1" className="flex flex-col items-center justify-between h-screen px-4 py-8 md:px-6 lg:px-8 relative">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Hi Tom, great to see you</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Let's take a moment to check in and see how you're doing today.
        </p>
      </div>
      <div className="relative w-full max-w-[600px]">
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
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function TriangleAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}