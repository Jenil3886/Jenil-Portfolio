import { PERSONAL_INFO } from '@/data/personal-info';

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t bg-background">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
  