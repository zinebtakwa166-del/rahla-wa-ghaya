
import Link from 'next/link';
import Image from 'next/image';
import { Bell, Phone, CreditCard, Bus } from 'lucide-react';

export default function NavBar(){
  return (
    <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-40">
      <div className="container max-w-7xl py-3 flex items-center gap-3">
        <Link href="/"><a className="flex items-center gap-2 text-brand">
          <Image src="/logo.svg" alt="شعار رحلة وغاية" width={150} height={34}/>
          <span className="sr-only">رحلة وغاية</span>
        </a></Link>

        <nav className="ml-auto flex items-center gap-2">
          <Link href="/dashboard"><a className="btn btn-outline"><Bus className="h-4 w-4 ml-2"/>اللوحة</a></Link>
          <Link href="/payment"><a className="btn btn-outline"><CreditCard className="h-4 w-4 ml-2"/>التسديد</a></Link>
          <Link href="/contact"><a className="btn btn-outline"><Phone className="h-4 w-4 ml-2"/>اتصل بنا</a></Link>
          <button className="btn btn-primary"><Bell className="h-4 w-4 ml-2"/>تنبيهات</button>
        </nav>
      </div>
    </header>
  );
}
