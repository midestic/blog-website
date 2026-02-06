import Image from "next/image";

type Posts = {
  title: string;
  price: string;
  img: string;
}[];

export default function Product() {
  const post: Posts = [
    {
      price: "$514",
      title: "Finding Love & home in Tbilisi, Georgia",
      img: "/icons/product-1.svg",
    },

    {
      price: "$267",
      title: "Iphone Xs case, Iphone X case, SUPCASE",
      img: "/icons/product-2.svg",
    },

    {
      price: "$378",
      title: "Finding Love & home in Tbilisi, Georgia",
      img: "/icons/product-3.svg",
    },
  ];

  return (
    <div className="space-y-[40px] ">
      <div className="bg-white h-[107px] flex justify-center items-center shadow-xl">
        <p className="font-[700] text-[31.64px]">Product That I Have</p>
      </div>

      <div className="space-y-[40px]">
        {post.map((post, i) => (
          <div className="flex gap-[10px] px-[20px] max-md:flex-col" key={i}>
            <div className="w-[106px] h-[80px] relative max-md:w-full max-md:h-[150px]">
              <Image
                src={post.img}
                fill
                className="object-cover"
                alt="first-post"
              />
            </div>
            <div>
              <span className="font-[600] text-[24px] ">{post.title}</span>

              <p className="font-[600] text-[24px] text-primary-color">
                {post.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
