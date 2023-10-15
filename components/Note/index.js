export default function Note(props) {
  const { salutation, body, closing } = props.note;

  return (
    <div className="leading-normal md:leading-10">
      <p>{salutation},</p>
      <p className="my-4 md:my-6">{body}</p>
      <p>{closing},</p>
      <p>Future you</p>
    </div>
  );
}
