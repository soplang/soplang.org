interface Props {
  fromTop?: string;
}

export default function HorizontalLine({ fromTop }: Props) {
  return (
    <hr
      style={{
        marginTop: fromTop,
      }}
      className="!bg-dark-color/10 dark:!bg-white/10"
    />
  );
}
