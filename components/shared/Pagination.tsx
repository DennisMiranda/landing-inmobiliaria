import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  total: number;
  limit: number;
  searchParams: Record<string, string | number | undefined | null>;
}

export default function Pagination({
  currentPage,
  totalPages,
  total,
  limit,
  searchParams,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(
      Object.fromEntries(
        Object.entries({ ...searchParams, page: String(page) })
          .filter(([, value]) => value !== undefined && value !== null)
          .map(([key, value]) => [key, String(value)])
      )
    );
    return `?${params.toString()}`;
  };

  const startIndex = (currentPage - 1) * limit + 1;
  const endIndex = Math.min(currentPage * limit, total);

  return (
    <div className="flex flex-col items-center gap-4 pt-6">
      <div className="text-sm text-muted-foreground">
        Mostrando {startIndex}-{endIndex} de {total} resultados
      </div>

      <div className="flex items-center gap-2">
        {/* Previous Button */}
        {currentPage > 1 && (
          <Link href={createPageUrl(currentPage - 1)}>
            <Button variant="outline" size="sm" className="gap-1">
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>
          </Link>
        )}

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <Link key={pageNum} href={createPageUrl(pageNum)}>
                <Button
                  variant={currentPage === pageNum ? "primary" : "outline"}
                  size="sm"
                  className="w-10 h-10 p-0"
                >
                  {pageNum}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Next Button */}
        {currentPage < totalPages && (
          <Link href={createPageUrl(currentPage + 1)}>
            <Button variant="outline" size="sm" className="gap-1">
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
