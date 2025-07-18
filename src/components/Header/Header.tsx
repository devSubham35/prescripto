import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { navRoutes } from '@/routes/navRoutes'
import { Button } from '@/components/ui/button'
import { ThemeToggler } from '../common/ThemeToggler'
import ProfileAvatar from '../common/ProfileAvatar'

const navData = [
  { title: "Home", link: navRoutes?.home },
  { title: "All Doctors", link: navRoutes?.home },
  { title: "About", link: navRoutes?.about_us },
  { title: "Contact", link: navRoutes?.contact_us },
]

const Header = () => {

  const router = useRouter();
  const { theme } = useTheme();
  const isDashboardRoute = router.pathname.startsWith('/dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='container'>
      <div className='py-4 flex justify-between items-center border-b relative'>
        {/* Logo */}
        <Link href={navRoutes?.home} className='w-[130px]'>
          <Image
            width={500}
            height={500}
            alt="Prescripto_logo"
            className='w-full h-full'
            src={theme === "dark" ? "/dark_logo.svg" : "/logo.svg"}
          />
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-8'>
          {navData.map((item, index) => (
            <Link href={item.link} key={index} className='cursor-pointer hover:text-primary'>
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center gap-4'>
          <ThemeToggler />
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
        </div>

        {/* Call to Action */}
        <div className='hidden md:flex items-center gap-4'>
          {!isDashboardRoute &&
            <Button onClick={() => router.push(navRoutes?.auth?.signup)}>Create Account</Button>
          }
          <ThemeToggler />
          {isDashboardRoute && <ProfileAvatar />}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='p-4 flex justify-between items-center border-b'>
          <span className='font-semibold text-lg'>Menu</span>
          <X className="w-6 h-6 cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
        </div>
        <div className='flex flex-col gap-4 p-4'>
          {navData.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className='text-gray-700 hover:text-primary'
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          <Button onClick={() => router.push(navRoutes?.auth?.signup)}>Create Account</Button>
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default Header