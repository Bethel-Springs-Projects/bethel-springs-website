import { LoaderCircle } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50 px-6">
      <div className="text-center max-w-md flex flex-col items-center">
        {/* Glowing icon */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
          <LoaderCircle className="relative h-14 w-14 text-primary animate-spin" strokeWidth={1.5} />
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          We&apos;re getting things ready
        </h1>
        <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
          Our website is currently undergoing maintenance.
          <br />
          We&apos;ll be back online shortly.
        </p>

        {/* Subtle decorative line */}
        <div className="mt-8 w-12 h-1 bg-primary/30 rounded-full" />

        <p className="mt-6 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Cargoland
        </p>
      </div>
    </div>
  );
}