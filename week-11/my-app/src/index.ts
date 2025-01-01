export default {
	async fetch(request, env, ctx): Promise<Response> {

	  const randomEntry = arr[Math.floor(Math.random() * arr.length)];

	  const jsonString = JSON.stringify(randomEntry, null, 2); // Pretty-print with 2 spaces

	  return new Response(jsonString, {
		headers: { "Content-Type": "application/json" },
	  });
	},
  } satisfies ExportedHandler<Env>;
  
  const arr : {}[] = [
	{
	  title: "Go to gym",
	  description: "Going to gym",
	},
	{
	  title: "Cricket match",
	  description: "Playing cricket",
	},
	{
	  title: "Live concert",
	  description: "Booking tickets for a concert",
	},
	{
	  title: "Learn Swimming",
	  description: "Learning to swim",
	},
	{
	  title: "Ploughing wheat",
	  description: "Ploughing wheat from field",
	},
  ];
  