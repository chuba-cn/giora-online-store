import MainContent from "@/components/MainContent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MobileSubNav from "@/components/MobileSubNav";
import NewsLetter from "@/components/NewsLetter";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <div>
      <div className="block lg:hidden bg-green-primary-light">
        <MaxWidthWrapper>
          <MobileSubNav />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="bg-backgrounds-light">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 ">
        <aside className="hidden lg:block lg:col-span-2 py-8 pr-9 border-r border-gray-300">
          <Sidebar />
        </aside>
        <main className="lg:col-span-10">
          <MainContent />
        </main>
      </div>
    </MaxWidthWrapper>

    <MaxWidthWrapper className="bg-green-primary-light">
      <NewsLetter/>
    </MaxWidthWrapper>
    </div>
  );
}
