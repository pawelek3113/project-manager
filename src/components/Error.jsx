export default function Error({ title, description }) {
	return (
		<div className="border-4 border-red-600 rounded-md p-4 text-center text-red-600 font-bold">
			<h2 className="text-lg">{title}</h2>
			<p className="text-sm">{description}</p>
		</div>
	);
}
