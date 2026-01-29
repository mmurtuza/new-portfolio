import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link
              href="https://github.com/mmurtuza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://murtuza.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Murtuza.dev
            </Link>
            <Link
              href="https://linkedin.com/in/mmurtuzah004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            &copy; {new Date().getFullYear()} Md Murtuza Hussain
          </p>
        </div>
      </div>
    </footer>
  )
}
