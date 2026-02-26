const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-lg text-muted-foreground mb-6">
      Sorry, the page you are looking for does not exist.
    </p>
    <a href="/" className="text-primary underline">
      Go Home
    </a>
  </div>
);

export default NotFound;
