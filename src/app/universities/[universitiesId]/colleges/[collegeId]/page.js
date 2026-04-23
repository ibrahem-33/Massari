import MajorCard from "../../../../components/MajorCard";

export default function MajorsPage() {
  const majors = [
    /* data */
    {
      id: 1,
      name: "علم الحاسوب",
      description:
        "يهتم بدراسة الخوارزميات، البرمجة، الذكاء الاصطناعي، وهندسة البرمجيات.",
      hourlyPrice: 50,
      acceptanceRate: 85,
      type: "علمي",
    },
  ];

  return (
    <div className="p-6 grid gap-6 bg-bg">
      {majors.map((m) => (
        <MajorCard key={m.id} major={m} universityId={1} collegeId={2} />
      ))}
    </div>
  );
}
