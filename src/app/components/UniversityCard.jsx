"use client";

import { Card, CardContent, Typography, Chip } from "@mui/material";
import { useRouter } from "next/navigation";

export default function UniversityCard({ university }) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/universities/${university.id}`)}
      className="flex flex-row   h-[270px] items-center gap-6 p-2 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer bg-white"
    >
      {/* الصورة */}
      <div className="w-[200px] h-full flex-shrink-0 overflow-hidden rounded-xl">
        <img
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* المحتوى */}
      <CardContent className="flex flex-col gap-2 p-0 items-end" >
        
        {/* العنوان */}
        <Typography variant="h6" className="font-bold text-text">
          {university.name}
        </Typography>

        {/* نوع الجامعة */}
        <Chip label={university.type} />

        {/* وصف */}
        <Typography variant="body2" className="text-textSecondary max-w-[500px] text-right">
          {university.description}
        </Typography>

        {/* معلومات إضافية */}
        <div className="flex items-center gap-3 mt-2">
          <span className="text-sm text-textSecondary">
           {university.location}
          </span>

          <span className="text-sm text-textSecondary">
            {university.numOfMajer} تخصص
          </span>
        </div>

        
      </CardContent>
    </Card>
  );
}