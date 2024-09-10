export default function Error({ title, description }) {
  return (
    <div className="rounded-md border-4 border-red-600 p-4 text-center font-bold text-red-600">
      <h2 className="text-lg">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}
