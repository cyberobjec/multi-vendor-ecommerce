'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import NavbarSiderbar from './navbar-siderbar'

import { MenuIcon } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

interface NavbarItemProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent text-primary px-3.5 text-lg',
        // 当前页面高亮显示
        isActive && 'bg-black text-white hover:bg-black hover:text-white'
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}

// 导航菜单配置
const navbarItems = [
  { href: '/', children: '首页' },
  { href: '/about', children: '关于' },
  { href: '/features', children: '功能' },
  { href: '/pricing', children: '价格' },
  { href: '/contact', children: '联系' },
]

// 主导航栏：响应式布局，移动端隐藏菜单
const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <nav className="h-20 flex border-b justify-between items-center font-medium bg-white px-6">
      <Link href="/" className="flex items-center">
        <span className={`${poppins.className} text-5xl font-semibold`}>
          funroad
        </span>
      </Link>
      <NavbarSiderbar itmes={navbarItems} open={open} onOpenChange={setOpen} />

      {/* 大屏显示导航菜单 */}
      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map(item => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex  h-full">
        <Button
          asChild
          variant="secondary"
          className="border-1 border-t-0 border-b-0 border-r-0 px-12 h-full  rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/login">登录</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-1 border-t-0 border-b-0 border-r-0 px-12 h-full bg-black text-white  rounded-none  hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/signup">注册</Link>
        </Button>
      </div>
      <div className="felx lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="size-6" />
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
