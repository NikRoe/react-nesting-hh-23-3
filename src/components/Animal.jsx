import Button from './Button';

export default function Animal({ emoji, name, description }) {
  return (
    <>
      <h2>
        {emoji} {name}
      </h2>
      <p>{description}</p>
      <Button>{name}</Button>
    </>
  );
}
