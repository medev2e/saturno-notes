import { AppSidebar } from '@/components/app-sidebar'
import { ModeToggle } from '@/components/mode-toggle'
import { SearchForm } from '@/components/search-form'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import Link from 'next/link'

export default function Page () {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4'>
          <SidebarTrigger className='-ml-1' />
          <SearchForm className='w-full sm:ml-auto sm:w-auto' />
          <ModeToggle />
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4'>
          <div className='grid auto-rows-min gap-4 md:grid-cols-5'>
            {Array.from({ length: 20 }).map((_, i) => (
              <Link href='/' key={i} className='bg-muted/50 aspect-square rounded-xl' />
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
