const card = [
  {
    text: "Bala blu bala electricty army electricty broooom corn army line tia-tia garri pdapc down-payment electricty blu pdapc our tia-tia corn electricty highway bala highway eba blu garri different highway our",
    author: "Joy Kim",
    role: "explorer",
  },

  {
    text: "Bala blu bala electricty army electricty broooom corn army line tia-tia garri pdapc down-payment electricty blu pdapc our tia-tia corn electricty highway bala highway eba blu garri different highway our",
    author: "Joy Kim",
    role: "explorer",
  },

  {
    text: "Bala blu bala electricty army electricty broooom corn army line tia-tia garri pdapc down-payment electricty blu pdapc our tia-tia corn electricty highway bala highway eba blu garri different highway our",
    author: "Joy Kim",
    role: "explorer",
  },
];

export default function SectionSix() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-[40px] px-[124px]">
      {card.map((item, i) => (
        <div
          key={i}
          className="rounded-[30px] shadow-xl p-[20px]  space-y-[20px]"
        >
          <p className="font-[700] text-[18px]">{item.text}</p>

          <p className="font-[700] text-[24px] ">{item.author}</p>

          <p className="font-[700] text-[18px]">{item.role}</p>
        </div>
      ))}
    </div>
  );
}
