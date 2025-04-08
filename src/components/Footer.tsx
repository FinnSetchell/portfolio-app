import { Button } from "./ui/Button";

export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200 bg-gray-100 text-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Finn Setchell. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4">
          <Button
            variant="white"
            className="p-3"
            icon={<i className="fab fa-github text-xl"></i>}
            ariaLabel="GitHub"
          />
          <Button
            variant="white"
            className="p-3"
            icon={<i className="fas fa-envelope text-xl"></i>}
            ariaLabel="Email"
          />
          <Button
            variant="white"
            className="p-3"
            icon={<i className="fab fa-discord text-xl"></i>}
            ariaLabel="Discord"
          />
        </div>
      </div>
    </footer>
  );
}
