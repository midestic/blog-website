import Link from "next/link";

const categories = [
  {
    title: "Europe",
    stat: "11",
  },

  {
    title: "Mountains",
    stat: "11",
  },

  {
    title: "Europe",
    stat: "11",
  },
  {
    title: "Traveling Video",
    stat: "11",
  },
  {
    title: "Beauty of Seas",
    stat: "11",
  },
  {
    title: "Cuisine",
    stat: "11",
  },
  {
    title: "Guides for traveler",
    stat: "11",
  },
  {
    title: "Other",
    stat: "11",
  },
];

export default function Categories() {
  return (
    <div className="px-[40px] py-[10px] space-y-[40px] shadow-xl bg-white">
      <p className="font-[700] text-[29.65px] text-center">Categories</p>

      <div className="space-y-[20px]">
        {categories.map((list, i) => (
          <Link className="flex justify-between items-center" href={""}>
            <p className="font-[500] text-[24px]">{list.title}</p>
            <p className="font-[500] text-[24px]"> ({list.stat}) </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
