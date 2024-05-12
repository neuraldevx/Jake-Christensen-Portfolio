import Link from "next/link";
import { Button } from '/workspaces/personalportfolio/app/components/ui/button';
import { Input } from '/workspaces/personalportfolio/app/components/ui/input';
import { Textarea } from '/workspaces/personalportfolio/app/components/ui/textarea';
import { PhoneIcon, MailIcon } from '@heroicons/react/outline';
import { Linkedin, GitHub } from 'react-feather';
import { BsTwitterX } from "react-icons/bs";
import Image from 'next/image'

export default function Page() {
  return (
    <main className="p-4">
      <section className="container px-4 py-0 md:py-0 lg:py-0 flex flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Jacob Christensen</h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 text-lg md:text-xl whitespace-nowrap">
            Passionate Developer | AI & Data Engineer | UW-Madison '24
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://twitter.com/realjakechris" aria-label="Twitter">
            <BsTwitterX className="h-5 w-5 cursor-pointer" />
          </Link>
          <a className="flex items-center space-x-2" href="mailto:Jrchris511@gmail.com">
            <MailIcon className="h-5 w-5" />
          </a>
          <Link href="https://www.linkedin.com/in/jacobrchristensen/" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 cursor-pointer" />
          </Link>
          <Link href="https://github.com/JakeChristensen5" aria-label="GitHub">
            <GitHub className="h-5 w-5 cursor-pointer" />
          </Link>
        </div>
      </section>
      {/* pfp */}
      <section className="container mx-auto px-4 py-8 text-center">
      <div className="container mx-auto px-4 py-8 text-center">
      <img
      src="/assets/dev3pfp.png"  
      alt="Jacob Christensen"
      className="" // Tailwind CSS for styling
    />
    </div>
      </section>
    </main>
  );
}
