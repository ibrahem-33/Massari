"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function CollegeCard({ college, universityId }) {
  const router = useRouter();

  return (
    <Card
      onClick={() =>
        router.push(`/universities/${universityId}/colleges/${college.id}`)
      }
      className="flex flex-row items-center gap-5 p-4 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer bg-white"
    >
      {/* أيقونة / صورة */}
      <div className="w-[100px] h-[100px] flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-3xl">
        🎓
      </div>

      {/* المحتوى */}
      <CardContent className="flex flex-col gap-2 p-0">
        
        {/* اسم الكلية */}
        <Typography variant="h6" className="font-bold text-text">
          {college.name}
        </Typography>

        {/* وصف */}
        <Typography
          variant="body2"
          className="text-textSecondary max-w-[500px]"
        >
          {college.description}
        </Typography>

        {/* معلومات إضافية */}
        <div className="flex items-center gap-4 mt-2">
          <span className="text-sm text-textSecondary">
            📚 {college.majorsCount} تخصص
          </span>

          <span className="text-sm text-textSecondary">
            👨‍🎓 طلاب: {college.studentsCount || "غير متوفر"}
          </span>
        </div>
      </CardContent>

      {/* سهم */}
      <div className="ml-auto text-gray-400 text-xl">
        ➜
      </div>
    </Card>
  );
}