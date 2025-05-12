import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container mx-auto grid min-h-[calc(100vh-10rem)] place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Pagina Niet Gevonden
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Sorry, we konden de pagina die u zoekt niet vinden.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Terug naar Home
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-foreground">
            Neem contact op <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

