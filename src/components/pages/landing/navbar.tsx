import { Link } from '@tanstack/react-router';

export function Navbar() {
  return (
    <nav className="flex items-center px-4 z-40 justify-center">
      <div className="border-b border-b-white/20 py-4 flex w-full items-center justify-between">
        <h1 className="font-medium flex gap-0.5 items-start tracking-tighter text-2xl text-white">
          Serenity <span>*</span>
        </h1>

        <div className="flex items-center gap-4">
          <Link className="tracking-tighter text-white" to="/">
            Sign up
          </Link>
          <Link className="tracking-tighter text-white" to="/">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
