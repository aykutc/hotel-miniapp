import RoomsGuests from "@/components/RoomsGuests";
import React from "react";
export async function getStaticProps() {
  return {
    props: {},
  };
}
function Rooms() {
  return (
    <div>
      <RoomsGuests />
    </div>
  );
}

export default Rooms;
