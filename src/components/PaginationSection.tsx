"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FC } from "react";
interface PaginationSectionProops {
  total: number;
  limit: number;
}

const PaginationSection: FC<PaginationSectionProops> = ({ total, limit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(String(searchParams.get("page"))) || 1;
  const handleNextPage = () => {
    if (currentPage < Math.ceil(total / limit)) {
      router.push(`?page= ${currentPage + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      router.push(`?page= ${currentPage - 1}`);
    }
  };
  return (
    <Pagination className="flex justify-center items-center gap-3 ">
      <PaginationContent className="flex items-center gap-2">
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevPage}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-3 rounded-full hover:bg-gray-800 shadow-lg hover:shadow-cyan-500/50"
          />
        </PaginationItem>

        {/* Page Links */}
        <PaginationItem>
          <PaginationLink className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 px-4 py-2 rounded-full hover:bg-gray-800 shadow-lg hover:shadow-cyan-500/50">
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={handleNextPage}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 p-3 rounded-full hover:bg-gray-800 shadow-lg hover:shadow-cyan-500/50"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
