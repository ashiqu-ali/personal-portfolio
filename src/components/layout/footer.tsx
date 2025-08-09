export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Ashiqu Ali. All rights reserved.</p>
      </div>
    </footer>
  );
}
