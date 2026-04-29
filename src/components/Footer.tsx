export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black p-4 fixed bottom-0 left-0 right-0 z-10">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">
          &copy; {new Date().getFullYear()} Soat Soatdigon
        </p>
      </div>
    </footer>
  );
}