import { useState } from "react";
import { Link, useLocation } from "wouter"; // ✅ already using wouter
import { Search, Bell } from "lucide-react";
import SearchInput from "@/components/SearchInput";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location, setLocation] = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isHomePage = location === "/";

  // ✅ Updated logic: Always redirect to profile on avatar click
  const handleProfileClick = () => {
    setLocation("/profile");
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-jakarta">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-4 text-[#111418] hover:opacity-80 transition-opacity"
            data-testid="link-home"
          >
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
              SkillLink
            </h2>
          </Link>
          <nav className="flex items-center gap-9">
            <Link
              href="/events"
              className={`text-sm font-medium leading-normal hover:text-[#0d78f2] cursor-pointer transition-colors ${
                location === "/events" ? "text-[#0d78f2]" : "text-[#111418]"
              }`}
              data-testid="link-events"
            >
              Events
            </Link>
            <Link
              href="/courses"
              className={`text-sm font-medium leading-normal hover:text-[#0d78f2] cursor-pointer transition-colors ${
                location === "/courses" ? "text-[#0d78f2]" : "text-[#111418]"
              }`}
              data-testid="link-courses"
            >
              Courses
            </Link>
            <Link
              href="/workshops"
              className={`text-sm font-medium leading-normal hover:text-[#0d78f2] cursor-pointer transition-colors ${
                location === "/workshops" ? "text-[#0d78f2]" : "text-[#111418]"
              }`}
              data-testid="link-workshops"
            >
              Workshops
            </Link>
            <Link
              href="/tutors"
              className={`text-sm font-medium leading-normal hover:text-[#0d78f2] cursor-pointer transition-colors ${
                location === "/tutors" ? "text-[#0d78f2]" : "text-[#111418]"
              }`}
              data-testid="link-tutors"
            >
              Tutors
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <SearchInput placeholder="Search" className="min-w-40 max-w-64" />

          {isHomePage && !isLoggedIn ? (
            <div className="flex gap-2" data-testid="auth-buttons">
              <button
                onClick={() => setIsLoggedIn(true)}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0d78f2] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors"
                data-testid="button-signup"
              >
                <span className="truncate">Sign Up</span>
              </button>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors"
                data-testid="button-login"
              >
                <span className="truncate">Login</span>
              </button>
            </div>
          ) : (
            <div className="flex gap-4" data-testid="user-actions">
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-gray-200 transition-colors"
                data-testid="button-notifications"
              >
                <Bell size={20} />
              </button>
              <div
                onClick={handleProfileClick} // ✅ always redirects now
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:ring-2 hover:ring-[#0d78f2] transition-all"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40")`,
                }}
                data-testid="img-avatar"
              />
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
