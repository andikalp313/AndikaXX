import { getEntries } from "@/lib/contentful";
import HomePage from "@/features/home/page";

interface HomeProps {
  searchParams: { [key: string]: string };
}

export default async function Home({ searchParams }: HomeProps) {
  const blogs = await getEntries(Number(searchParams.page) || 1);

  if (!blogs) {
    return;
  }
  return (
    <div>
      <div className="flex items-center justify-center mx-auto">
        <HomePage />
      </div>
    </div>
  );
}
