interface Props {
  value: number;
}
export default function Spacer({ value }: Props) {
  return (
    <div
      style={{
        height: "10px",
        marginTop: `${value}px`,
      }}
    />
  );
}
