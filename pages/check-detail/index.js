import BottomSheet from '@/components/BottomSheet';
import Callendar from '@/components/Calendar';
import FilterBottomSheet from '@/components/FilterBottomSheet';
import MultipleSlider from '@/components/FilterBottomSheet/MultipleSlider';
import Slider from '@/components/FilterBottomSheet/Slider';
import FloatingBottomButton from '@/components/FloatingBottomButton';
import HeaderTitle from '@/components/HeaderTitle';
import Location from '@/components/icons/Location';
import RoomsGuests from '@/components/RoomsGuests';
import RoomSummary from '@/components/RoomSummary';
import { useRouter } from 'next/router';
import Dates from 'pages/date-selection';
import React, { useEffect, useState } from 'react';
import styles from './check-detail.module.css';

function CheckDetail() {
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [denemeOpen, setDenemeOpen] = useState(false);
  const [date, setDate] = useState({});

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

  useEffect(() => {
    setTimeout(() => {
      setDenemeOpen(true);
    }, 500);
  }, []);
  return (
    <>
      <BottomSheet className={'bottom-sheet-2'} title="DATES" isOpen={isDateModalOpen} onDismiss={() => setIsDateModalOpen(false)}>
        <Callendar setSelection={setDate} />
      </BottomSheet>
      <BottomSheet className={'bottom-sheet-1'} title="ROOMS & GUESTS" isOpen={isRoomModalOpen} onDismiss={() => setIsRoomModalOpen(false)}>
        <RoomsGuests />
      </BottomSheet>
      <BottomSheet
        className={'bottom-sheet-3'}
        title="sadas"
        isOpen={denemeOpen}
        onDismiss={() => {
          setDenemeOpen(false);
        }}
      >
        <FilterBottomSheet />
      </BottomSheet>
      <div className={styles.checkDetailContainer}>
        <div className={styles.header}>
          <HeaderTitle>DETAILS</HeaderTitle>
        </div>
        <div className={styles.regionContainer}>
          <Location />
          <p className={styles.regionText}>{router.query.title}</p>
        </div>
        <RoomSummary
          booking={booking}
          onDateClick={() => {
            setIsDateModalOpen(true);
          }}
          onRoomClick={() => {
            setIsRoomModalOpen(true);
          }}
        />
        <FloatingBottomButton>SEE RESULTS</FloatingBottomButton>
      </div>
    </>
  );
}

export default CheckDetail;
