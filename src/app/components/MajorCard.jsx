"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function MajorCard({ major, universityId, collegeId }) {
  const router = useRouter();

  return (
    <Card
      onClick={() =>
        router.push(
          `/universities/${universityId}/colleges/${collegeId}/majors/${major.id}`
        )
      }
      className="flex flex-row items-center gap-5 p-4 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer bg-white"
    >
      {/* أيقونة */}
      <div className="w-[90px] h-[90px] flex-shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center text-3xl">
        🎯
      </div>

      {/* المحتوى */}
      <CardContent className="flex flex-col gap-2 p-0">
        
        {/* اسم التخصص */}
        <Typography variant="h6" className="font-bold text-text">
          {major.name}
        </Typography>

        {/* وصف */}
        <Typography
          variant="body2"
          className="text-textSecondary max-w-[500px]"
        >
          {major.description}
        </Typography>

        {/* معلومات */}
        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-textSecondary">
          <span>💰 {major.hourlyPrice} دينار/ساعة</span>
          <span>📊 معدل القبول: {major.acceptanceRate}%</span>
          <span>🎓 {major.type || "غير محدد"}</span>
        </div>
      </CardContent>

      {/* سهم */}
      <div className="ml-auto text-gray-400 text-xl">
        ➜
      </div>
    </Card>
  );
}