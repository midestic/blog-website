"use client";

import { Post, usePosts } from "@/context/PostsContext";
import Image from "next/image";

export default function Asia() {
  const { asia, isLoading } = usePosts();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <p>Loading Blogs.....</p>
      </div>
    );
  }

  if (asia.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <p>No Blog for now</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[50px]">
        {asia.map((item: Post) => (
          <div key={item._id}>
            <div className="h-[360px] relative">
              {item.image && (
                <Image
                  src={item.image}
                  fill
                  alt="blog-image"
                  className="object-cover"
                />
              )}
            </div>
            <div className="w-[90%] py-[10px] bg-white border translate-y-[-50px]">
              <div className="flex items-center gap-[10px] font-[700] text-[18px] text-secondary-color">
                <span className="w-[5px] h-[40px] bg-secondary-color"></span>
                <p className="">{item.createdAt}</p> - Tips & Tricks
              </div>

              <div className="px-[20px]">
                <div className="border-b pb-[10px]">
                  <p className="font-[700] text-[24px]">{item.title}</p>
                </div>

                <div className="flex justify-between items-center py-[10px]">
                  <div className="flex gap-[10px] items-center">
                    <Image
                      src={"/icons/location.svg"}
                      width={30}
                      height={30}
                      alt="location icon"
                    />

                    <p className="font-[500] text-[18px]">{item.country}</p>
                  </div>

                  <div className="flex gap-[10px] items-center">
                    <Image
                      src={"/icons/comment.svg"}
                      width={30}
                      height={30}
                      alt="location icon"
                    />

                    <p className="font-[500] text-[18px]">
                      ({item.comments.length})
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
