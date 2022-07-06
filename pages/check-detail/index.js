import BottomSheet from '@/components/BottomSheet';
import FloatingBottomButton from '@/components/FloatingBottomButton';
import HeaderTitle from '@/components/HeaderTitle';
import Location from '@/components/icons/Location';
import RoomsGuests from '@/components/RoomsGuests';
import RoomSummary from '@/components/RoomSummary';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './check-detail.module.css';

function CheckDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { checkIn, checkOut } = router.query;
  const booking = {
    calander: {
      date: 'Jun 24 - Jun 27',
      time: '3',
    },
    room: {
      count: 1,
      adult: 1,
      child: 0,
    },
  };
  return (
    <div className={styles.checkDetailContainer}>
      <BottomSheet title="ROOMS & GUESTS" isOpen={isModalOpen} onDismiss={() => setIsModalOpen(false)} leftComponent={'Reset'}>
        <RoomsGuests />
      </BottomSheet>
      <div className={styles.header}>
        <HeaderTitle>DETAILS</HeaderTitle>
      </div>
      <div className={styles.regionContainer}>
        <Location />
        <p className={styles.regionText}>TROJENA</p>
      </div>
      <RoomSummary
        booking={booking}
        onDateClick={() => {}}
        onRoomClick={() => {
          setIsModalOpen(true);
        }}
      />
      <FloatingBottomButton>SEE RESULTS</FloatingBottomButton>
    </div>
  );
}

export default CheckDetail;
