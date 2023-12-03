import fulltime from "../../assets/images/categories/fulltime.jpg";
import offline from "../../assets/images/categories/offline.jpg";
import parttime from "../../assets/images/categories/parttime.jpg";
import remote from "../../assets/images/categories/remote.jpg";
const Categories = () => {
  const cardInfos = [
    {
      image: remote,
      title: "Remote Job:",
      description:
        "A remote job allows individuals to work from any location, providing flexibility and the freedom to choose their workspace. Team collaboration often occurs online through virtual communication tools. Remote jobs are suitable for those who value autonomy and are comfortable with digital collaboration.",
    },
    {
      image: fulltime,
      title: "Full-time Job:",
      description:
        "A full-time job involves a standard workweek, typically around 40 hours, and often includes benefits such as health insurance, retirement plans, and paid time off. Employees commit the majority of their working hours to the job, making it their primary source of income. Full-time positions provide stability and opportunities for career growth.",
    },
    {
      image: parttime,
      title: "Part-time Job:",
      description:
        "Part-time jobs involve working fewer hours than a full-time position, often on a schedule tailored to accommodate other commitments or responsibilities. Part-time employees may receive some benefits, such as pro-rated leave or flexible work hours. This option is suitable for those seeking supplementary income or balancing work with other priorities.",
    },
    {
      image: offline,
      title: "Offline Job:",
      description:
        "An offline job refers to traditional employment where the work is conducted in a physical location, such as an office, store, or factory. Communication and collaboration typically happen face-to-face, and the job requires a physical presence at the workplace. This structure is common in various industries, fostering direct interaction among team members",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="text-center text-5xl font-bold my-10">
        <h1>Popular Categories</h1>
      </div>
      <div className="flex justify-between  gap-10 ">
        {cardInfos.map((card, index) => (
          <div key={index} className="hover:scale-105 ease-in-out duration-300   card w-1/2 bg-base-300 shadow-xl border border-black">
            <figure>
              <img src={card.image}  className="w-full h-72"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-green-600">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
