import React from "react";

// define the class of position
const positionClasses = {
  center: "items-center",
  start: "items-start",
  end: "items-end",
};

// explanation:
// positionClasses use when we want place the div in center, start, or end
// example use:
// <Container space={4} position="center">
//     children here...
// </Container>

// type of position
type Position = "center" | "start" | "end";
interface ContainerProps {
  children: React.ReactNode;
  space: number;
  position?: Position;
}

export default function Container({
  children,
  space,
  position,
}: ContainerProps) {
  return (
    <div
      className={`flex gap-${space} ${position && positionClasses[position]}`}
    >
      {children}
    </div>
  );
}
