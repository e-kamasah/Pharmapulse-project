const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
    <p className="text-lg text-muted-foreground mb-6">
      An unexpected error occurred. Please try again later.
    </p>
    <a href="/" className="text-primary underline">
      Go Home
    </a>
  </div>
);

export default ErrorPage;
