import Header from '@/components/header';
import About from '@/components/about';
import Experience from '@/components/experience';
import Blog from '@/components/blog';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-mono">
      <Header />
      <main className="pt-16 md:pt-16">
        <About />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
