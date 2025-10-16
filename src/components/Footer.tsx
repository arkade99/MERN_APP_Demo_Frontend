export default function Footer() {
  return (
    <footer className="mt-10 flex items-center justify-center space-x-3 bg-black px-6 py-4 text-gray-300">
      {/* <img src={logo} alt="App Logo" className="h-6 w-6 invert" /> */}
      <p className="text-sm">
        © {new Date().getFullYear()} Movie Streaming App. All rights reserved.
      </p>
    </footer>
  );
}
