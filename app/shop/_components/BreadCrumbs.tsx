import Link from "next/link";

interface BreadcrumbItemType {
  name: string;
  link: string;
}

interface BreadCrumbType {
  breadcrumb: BreadcrumbItemType[];
}

export function BreadCrumbs({ breadcrumb }: BreadCrumbType) {
  return (
    <nav className="max-w-[1286px] 2xl:w-[1440px]">
      <ul className="flex items-center space-x-2">
        {breadcrumb.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === breadcrumb.length - 1 ? (
              // Last item (current page) without a link
              <span className="text-gray-600">{item.name}</span>
            ) : (
              // Other items with links
              <>
                <Link href={item.link} className="text-blue-600 hover:underline">
                  {item.name}
                </Link>
                <span className="mx-2 text-gray-400">/</span> {/* Separator */}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}