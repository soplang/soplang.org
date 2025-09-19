import { CardType } from "@site/lib/types";
interface Props {
  cards: CardType[];
}
export default function Card({ cards }: Props) {
  return (
    <ul className="grid w-full  border border-black/10 rounded-[10px] dark:border-white/10 !px-[15px] py-3 grid-cols-1 md:grid-cols-2 place-content-center gap-[10px]">
      {cards.map((each, index) => {
        return <CardItem key={index} {...each} />;
      })}
    </ul>
  );
}

function CardItem({ title, description, icon }: CardType) {
  return (
    <button className="flex group flex-col hover:border-black/10 dark:hover:border-white/10 gap-[5px] border border-black/5 dark:border-white/5 rounded-[20px] px-2.5 w-full py-2">
      <div className="flex flex-col  w-fit mx-auto items-center">
        {icon}
        <h2>{title}</h2>
      </div>
      <p className="text-[1.2rem] opacity-80 text-center text-balance">
        {description}
      </p>
    </button>
  );
}
