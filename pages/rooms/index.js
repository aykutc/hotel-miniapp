import RoomsGuests from "@/components/RoomsGuests";
import React from "react";
export async function getStaticProps() {
  return {
    props: {},
  };
}
function Rooms() {
  return <RoomsGuests />;
}

export default Rooms;
