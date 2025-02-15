import Footer from "@/app/components/footer/Footer";
import Category from "@/app/components/categories/Category";
export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="px-6">
        Hello World
        <Category />
        <Category />
      </div>
      <Footer />
    </div>
  );
}
