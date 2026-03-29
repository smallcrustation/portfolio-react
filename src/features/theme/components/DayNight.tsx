import { useTheme } from "@/features/theme/context/ThemeContext";
import CactSvg from "@/assets/svgs/CactSvg";
import "@/features/theme/components/DayNight.css";

export function DayNight() {
  const { dayNight, toggleDayNight } = useTheme();

  return (
    <div className="DayNight" onClick={toggleDayNight}>
      <div
        className={`Daynight-text ${
          dayNight
            ? "fadeInUp-disappear"
            : "fadeInDown-disappear DayNight-night-text"
        }`}
      >
        {dayNight ? "Day" : "Night"} Mode
      </div>
      <div className={`DayNight-day ${dayNight ? "" : "DayNight-night"}`} />
      <div
        className={`DayNight-moon ${dayNight ? "" : "DayNight-moon-active"}`}
      />
      <CactSvg
        flowerColor={dayNight ? "#ef0519" : "#70040d"}
        cactusColor={dayNight ? "#75ba2c" : "#446d19"}
      />
    </div>
  );
}
