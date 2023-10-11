export default function Note(props) {
  const { salutation, note, closing } = props.note;

  return (
    <div className="m-auto leading-normal md:leading-8">
      <p>{salutation},</p>
      <p className="my-4">{note}</p>
      <p>{closing},</p>
      <p>Future you</p>
    </div>
  );
}
