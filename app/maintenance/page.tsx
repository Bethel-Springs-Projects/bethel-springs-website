import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md flex flex-col items-center">
        {/* <Wrench className="mb-6 h-8 w-8 text-primary animate-bounce" /> */}
        <div className="mb-6 h-8 w-8 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />

        <h1 className="text-2xl font-semibold mb-3">
          We’re getting things ready
        </h1>
        <p className="text-sm text-gray-600">
          Our website is currently under maintenance. <br className="hidden xxs:block xs:hidden" /> We’ll be live soon.
        </p>

        {/* Optional: small brand signature */}
        <div className="mt-2 border-t border-gray-100 w-full">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Bethel Springs.
          </p>
        </div>
      </div>
    </div>
  );
}
