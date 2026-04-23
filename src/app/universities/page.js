import UniversityCard from "../components/UniversityCard";

const api = [
  {
    id: 1,
    name: "الجامعة الهاشمية",
    numOfCollege: 16,
    numOfMajer: 33,
    description:
      "جامعة حكومية حديثة تقع في الزرقاء، وتتميّز بحرم جامعي واسع وبنية تحتية متطورة. تقدّم تخصصات متنوعة وتركّز على التعليم التطبيقي وربط المعرفة بسوق العمل.",
    type: "حكومية",
    image: "https://picsum.photos/id/400/400/300",
    colleges: [{}],
  },
  {
    id: 2,
    name: "الجامعة الأردنية",
    numOfCollege: 33,
    numOfMajer: 23,
    description:
      "قدم وأعرق الجامعات في الأردن، تقع في عمّان وتقدّم مجموعة واسعة من التخصصات الأكاديمية. تتميّز بجودة التعليم والبحث العلمي وتُعد خيارًا أولًا للعديد من الطلبة داخل وخارج المملكة.",
    type: "حكومية",
    image: "https://picsum.photos/id/231/200/300",
    colleges: [{}],
  },
  {
    id: 3,
    name: "جامعة ال البيت",
    numOfCollege: 36,
    numOfMajer: 13,
    description:
      "تقع في المفرق وتتميّز بطابعها الثقافي والإسلامي إلى جانب التخصصات العلمية الحديثة. توفر بيئة تعليمية هادئة ومجتمعًا طلابيًا متنوعًا من مختلف الجنسيات.",
    type: "حكومية",
    image: "https://picsum.photos/id/231/200/300",
    colleges: [{}],
  },
  {
    id: 4,
    name: "جامعة العلوم و التكنلوجية",
    numOfCollege: 36,
    numOfMajer: 13,
    description:
      "من أبرز الجامعات في المجالات الطبية والهندسية، وتقع في إربد. تشتهر بمستواها الأكاديمي العالي ومستشفياتها التعليمية المتقدمة.",
    type: "خاصة",
    image: "https://picsum.photos/id/231/200/300",
    colleges: [{}],
  },
  {
    id: 5,
    name: "جامعة العلوم و التكنلوجية",
    numOfCollege: 36,
    numOfMajer: 13,
    description:
      "من أبرز الجامعات في المجالات الطبية والهندسية، وتقع في إربد. تشتهر بمستواها الأكاديمي العالي ومستشفياتها التعليمية المتقدمة.",
    type: "خاصة",
    image: "https://picsum.photos/id/231/200/300",
    colleges: [{}],
  },
  {
    id: 6,
    name: "جامعة العلوم و التكنلوجية",
    numOfCollege: 36,
    numOfMajer: 13,
    description:
      "من أبرز الجامعات في المجالات الطبية والهندسية، وتقع في إربد. تشتهر بمستواها الأكاديمي العالي ومستشفياتها التعليمية المتقدمة.",
    type: "خاصة",
    image: "https://picsum.photos/id/231/200/300",
    colleges: [{}],
  },
  {
    id: 7,
    name: "جامعة العلوم و التكنلوجية",
    numOfCollege: 36,
    numOfMajer: 13,
    description:
      "من أبرز الجامعات في المجالات الطبية والهندسية، وتقع في إربد. تشتهر بمستواها الأكاديمي العالي ومستشفياتها التعليمية المتقدمة.",
    type: "خاصة",
    image: "https://picsum.photos/id/231/200/300",
    colleges: [{}],
  },
  {
    id: 8,
    name: "جامعة العلوم و التكنلوجية",
    numOfCollege: 36,
    numOfMajer: 13,
    description:
      "من أبرز الجامعات في المجالات الطبية والهندسية، وتقع في إربد. تشتهر بمستواها الأكاديمي العالي ومستشفياتها التعليمية المتقدمة.",
    type: "خاصة",
    image: "https://picsum.photos/id/231/200/300",
    colleges: [{}],
  },
];

export default function UniversitiesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-bg mt-20">
      {api.map((uni) => (
        <UniversityCard key={uni.id} university={uni} />
      ))}
    </div>
  );
}
