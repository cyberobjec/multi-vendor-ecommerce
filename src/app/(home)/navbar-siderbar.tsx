interface NavbarItem {
  href: string
  children: React.ReactNode
}

interface Props {
  itmes: NavbarItem[]
  open: boolean
  onOpenChange: (open: boolean) => void
}

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

const NavbarSiderbar = ({ itmes, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="h-full felx flex-col overflow-y-auto pb-2">
          {itmes.map(item => (
            <Link
              href={item.href}
              key={item.href}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/login"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              登录
            </Link>

            <Link
              href="/signup"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
            >
              注册
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarSiderbar
