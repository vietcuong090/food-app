import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Nav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-red-500' />
      </SheetTrigger>
      <SheetContent className='space-y-3'>
        <SheetTitle>
          <span>Welcom to Shoppe Foot</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className='flex flex-col gap-4'>
          <Button className='flex-1 font-bold bg-red-500'>Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default Nav;
