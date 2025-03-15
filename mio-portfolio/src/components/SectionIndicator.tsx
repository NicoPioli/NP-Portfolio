import React from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

interface SectionIndicatorProps {
  currentSection: number;
  totalSections: number;
  sectionBackgrounds: ("light" | "dark")[];
  sections: string[];
  onSectionSelect: (index: number) => void;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  currentSection,
  totalSections,
  sectionBackgrounds,
  sections,
  onSectionSelect,
}) => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: totalSections }).map((_, index) => {
        const isActive = index === currentSection;
        const bgType = sectionBackgrounds[currentSection] || "dark";

        // Palette personalizzata applicata ai dots
        const activeDotColor = bgType === "dark" ? "bg-accent" : "bg-primary";
        const inactiveDotColor =
          bgType === "dark" ? "bg-secondary" : "bg-white/80";

        return (
          <motion.div
            key={index}
            onClick={() => {
              onSectionSelect(index);
              scroller.scrollTo(sections[index], {
                duration: 800,
                smooth: "easeInOutQuart",
                offset: 0,
              });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              isActive
                ? `${activeDotColor} scale-125`
                : `${inactiveDotColor} scale-100`
            }`}
          />
        );
      })}
    </div>
  );
};

export default SectionIndicator;
