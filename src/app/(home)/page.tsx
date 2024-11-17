import { getEntries } from "@/lib/contentful";
import HomePage from "@/features/home/page";

interface HomeProps {
  searchParams: { [key: string]: string };
}

export default async function Home({ searchParams }: HomeProps) {
  try {
    const page = Number(searchParams.page) || 1;
    const blogs = await getEntries(page);

    if (!blogs) {
      return <div>Tidak ada blog yang ditemukan.</div>;
    }

    return (
      <div>
        <div className="flex items-center justify-center mx-auto">
          <HomePage />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return (
      <div>Terjadi kesalahan saat memuat data. Silakan coba lagi nanti.</div>
    );
  }
}
