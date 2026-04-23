"use client";

import {
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
  Button,
} from "@mui/material";

export default function UniversityFilterSidebar({
  filters,
  setFilters,
}) {
  const handleSearch = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleTypeChange = (type) => {
    setFilters({
      ...filters,
      type:
        filters.type === type ? "" : type,
    });
  };

  const handleCityChange = (city) => {
    setFilters({
      ...filters,
      city:
        filters.city === city ? "" : city,
    });
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      type: "",
      city: "",
    });
  };

  return (
    <div className="w-[280px] h-screen sticky top-0 p-5 bg-white shadow-md flex flex-col gap-6">
      
      {/* العنوان */}
      <Typography variant="h6" className="font-bold">
        الفلاتر
      </Typography>

      {/* البحث */}
      <TextField
        label="ابحث عن جامعة"
        variant="outlined"
        value={filters.search}
        onChange={handleSearch}
        fullWidth
      />

      {/* نوع الجامعة */}
      <div>
        <Typography className="mb-2 font-semibold">
          نوع الجامعة
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.type === "public"}
                onChange={() => handleTypeChange("public")}
              />
            }
            label="حكومية"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={filters.type === "private"}
                onChange={() => handleTypeChange("private")}
              />
            }
            label="خاصة"
          />
        </FormGroup>
      </div>

      {/* المحافظة */}
      <div>
        <Typography className="mb-2 font-semibold">
          المحافظة
        </Typography>

        <FormGroup>
          {[
            "عمان",
            "إربد",
            "الزرقاء",
            "البلقاء",
            "الكرك",
          ].map((city) => (
            <FormControlLabel
              key={city}
              control={
                <Checkbox
                  checked={filters.city === city}
                  onChange={() =>
                    handleCityChange(city)
                  }
                />
              }
              label={city}
            />
          ))}
        </FormGroup>
      </div>

      {/* زر إعادة تعيين */}
      <Button
        variant="outlined"
        color="secondary"
        onClick={resetFilters}
      >
        إعادة تعيين
      </Button>
    </div>
  );
}