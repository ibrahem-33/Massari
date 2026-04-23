import CollegeCard from "../../components/CollegeCard";

export default function CollegesPage() {
  const colleges = [
    /* data */
    {
      id: 1,
      name: "كلية تكنولوجيا المعلومات",
      description:
        "تقدم برامج متميزة في علوم الحاسوب وهندسة البرمجيات والذكاء الاصطناعي.",
      majorsCount: 6,
      studentsCount: 1200,
    },
  ];
  const universityId = 1;

  return (
    <div className="p-6 grid gap-6 bg-bg">
      {colleges.map((col) => (
        <CollegeCard key={col.id} college={col} universityId={universityId} />
      ))}
    </div>
  );
}
