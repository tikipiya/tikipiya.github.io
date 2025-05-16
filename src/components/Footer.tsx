import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/tikipiya",
    },
    {
      name: "Twitter",
      url: "https://x.com/tiki_Apple_1",
    },
  ];

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} tikisan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 