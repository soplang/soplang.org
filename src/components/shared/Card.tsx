import { CardType } from "@site/lib/types";
interface Props {
  cards: CardType[];
  shorerOrLongerDesc?: boolean;
}
export default function Card({ cards, shorerOrLongerDesc }: Props) {
  return (
    <ul className="grid w-full  border border-black/10 rounded-[10px] dark:border-white/10 !px-[15px] py-3 grid-cols-1 md:grid-cols-2 place-content-center gap-[10px]">
      {cards.map((each, index) => {
        return (
          <CardItem
            key={index}
            {...each}
            shorerOrLongerDesc={shorerOrLongerDesc}
          />
        );
      })}
    </ul>
  );
}

function CardItem({
  title,
  shorterDesc,
  longerDesc,
  shorerOrLongerDesc,
  icon,
}: CardType & {
  shorerOrLongerDesc?: boolean;
}) {
  console.log(shorerOrLongerDesc);
  console.log(shorterDesc);
  return (
    <button className="flex group flex-col hover:border-black/10 dark:hover:border-white/10 gap-[5px] border border-black/10 dark:border-white/10 rounded-[20px] px-2.5 w-full py-2">
      <div className="flex flex-col gap-[20px]  w-fit mx-auto items-center">
        {icon}
        <h2>{title}</h2>
      </div>
      {shorerOrLongerDesc ? (
        <p className="text-[1.2rem] opacity-80 text-center text-balance">
          {shorterDesc}
        </p>
      ) : (
        <p className="text-[1.2rem] opacity-80 text-center text-balance">
          {longerDesc}
        </p>
      )}
    </button>
  );
}
