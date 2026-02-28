import { services } from "@/app/data/services";



export default function ServicePage({ params }) {
  const service = services[params.slug];

  if (!service) return <h1>Service Not Found</h1>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{service.title}</h2>
      <p>{service.description}</p>
    </div>
  );
}