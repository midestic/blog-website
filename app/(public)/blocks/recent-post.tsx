import Image from "next/image";

type Posts = {
  date: string;
  category: string;
  title: string;
  img: string;
}[];

export default function RecentPost() {
  const post: Posts = [
    {
      date: "September 17, 2018 ",
      category: "Tips & Tricks",
      title: "Finding Love & home in Tbilisi, Georgia",
      img: "",
    },

    {
      date: "September 17, 2018 ",
      category: "Tips & Tricks",
      title: "Finding Love & home in Tbilisi, Georgia",
      img: "",
    },

    {
      date: "September 17, 2018 ",
      category: "Tips & Tricks",
      title: "Finding Love & home in Tbilisi, Georgia",
      img: "",
    },
  ];

  return (
    <div className="space-y-[40px] ">
      <div className="bg-white h-[107px] flex justify-center items-center shadow-xl">
        <p className="font-[700] text-[31.64px]">Recent Post</p>
      </div>

      <div className="space-y-[40px]">
        {post.map((post, i) => (
          <div className="flex gap-[10px] px-[20px] max-md:flex-col" key={i}>
            <div className="w-[100px] h-[80px] relative max-md:w-full max-md:h-[150px]">
              <Image
                src={"/icons/p1.svg"}
                fill
                className="object-cover "
                alt="first-post"
              />
            </div>
            <div>
              <span className="font-[500] text-[18px] text-[#0A0909]">
                {post.date}- {post.category}
              </span>

              <p className="font-[500] text-[24px]">{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
