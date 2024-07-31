import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav /> {/* layoutdan gelen component */}
        </div>
        {/* bu satır layout dışında bulunan componentleri içerisine alır */}
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
          {/* layout kısmı tekrar render edilmez. sadece child componentler render edilir. buna partial rendering denir. */}
        </div>
      </div>
    </div>
  );
}
