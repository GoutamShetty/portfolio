/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Gradient div
 */

import React, { ReactNode } from "react";

const GradientPosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    let clientScrollXY = { x: 0, y: 0 };
    let totalScrollXY = { x: 0, y: 0 };

    function updateTotalScrollXY() {
      totalScrollXY = {
        x: window.scrollX + clientScrollXY.x,
        y: window.scrollY + clientScrollXY.y,
      };
    }

    const updateMousePosition = (ev: MouseEvent) => {
      clientScrollXY = { x: ev.clientX, y: ev.clientY };
      updateTotalScrollXY();
      setMousePosition({ x: ev.pageX, y: ev.pageY });
    };
    const updateMousePositionOnScroll = (ev: Event) => {
      updateTotalScrollXY();
      setMousePosition({ x: totalScrollXY.x, y: totalScrollXY.y });
    };
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateMousePositionOnScroll);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

interface GradientDivProps {
  children: ReactNode;
  className?: string;
}

const GradientDiv: React.FC<GradientDivProps> = ({ children, className }) => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(200px circle at ${
          GradientPosition().x
        }px ${GradientPosition().y}px, #2b458f 0% , transparent 100% )`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default GradientDiv;
