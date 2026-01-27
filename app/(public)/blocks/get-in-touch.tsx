import Image from "next/image";

export default function GetinTouch() {
  const socials = [
    { id: 1, stat: "65.5K", type: "Likes", img: "/icons/facebook.svg" },

    { id: 2, stat: "105K", type: "Followers", img: "/icons/twitter.svg" },

    { id: 3, stat: "1.5M", type: "Subscribers", img: "/icons/youtube.svg" },

    {
      id: 4,
      stat: "85KFollowers",
      type: "Subscribers",
      img: "/icons/instagram.svg",
    },
  ];

  return (
    <div className="space-y-[40px]">
      <div className="h-[107px] flex justify-center items-center font-[700] text-[31.64px] shadow-xl">
        <p>Get In Touch</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {socials.map((social) => (
          <div
            key={social.id}
            className={`flex items-center gap-[20px] p-[10px] rounded-[10px] ${social.id === 1 ? "bg-[#4056ac]" : social.id === 2 ? "bg-[#60b7fe]" : social.id === 3 ? "bg-[#fe2c3c]" : "bg-[#e14d93]"} `}
          >
            {social.id === 1 && (
              <Image
                src={social.img}
                width={16}
                height={32}
                alt="social-icons"
              />
            )}

            {social.id !== 1 && (
              <Image
                src={social.img}
                width={32}
                height={32}
                alt="social-icons"
              />
            )}

            <div>
              <p className="font-[700] text-[16px] text-white">{social.stat}</p>
              <p className="font-[700] text-[16px] text-white">{social.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
