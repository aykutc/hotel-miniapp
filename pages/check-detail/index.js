import BottomSheet from '@/components/BottomSheet';
import Callendar from '@/components/Calendar';
import FloatingBottomButton from '@/components/FloatingBottomButton';
import HeaderTitle from '@/components/HeaderTitle';
import SearchContent from '@/components/HomeComponents/SearchContent';
import Back from '@/components/icons/Back';
import Location from '@/components/icons/Location';
import RoomsGuests from '@/components/RoomsGuests';
import RoomSummary from '@/components/RoomSummary';
import SearchBar from '@/components/SearchBar';
import { SearchRegionArray } from 'data/data';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './check-detail.module.css';

function CheckDetail() {
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateSelection, setDateSelection] = useState({});
  const [roomSelection, setRoomSelection] = useState([{ roomNo: 1, adults: 0, kids: 0 }]);

  const router = useRouter();
  const { checkIn, checkOut, title } = router.query;
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
    <>
      <BottomSheet className={'bottom-sheet-2'} title="DATES" isOpen={isDateModalOpen} onDismiss={() => setIsDateModalOpen(false)}>
        <div
          style={{
            padding: '0px 24px',
            height: 'calc(100vh - 170px)',
          }}
        >
          <Callendar setSelection={setDateSelection} />
          <FloatingBottomButton
            onClick={async () => {
              setIsDateModalOpen(false);
              setDateSelection({});
              Router.push(
                {
                  pathname: '/check-detail',
                  query: {
                    checkIn: dateSelection['CHECK-IN'].day + ' ' + dateSelection['CHECK-IN'].time,
                    checkOut: dateSelection['CHECK-OUT'].day + ' ' + dateSelection['CHECK-OUT'].time,
                    title,
                  },
                },
                undefined,
                { shallow: true }
              );
            }}
          >
            {dateSelection.durationAmount ? `CONTINUE - ${dateSelection.durationAmount} NIGHTS` : `SELECT ${dateSelection['CHECK-IN'] === undefined ? 'CHECK IN' : 'CHECK OUT'} DATE`}
          </FloatingBottomButton>
        </div>
      </BottomSheet>
      <BottomSheet className={'bottom-sheet-1'} title="ROOMS & GUESTS" isOpen={isRoomModalOpen} onDismiss={() => setIsRoomModalOpen(false)}>
        <>
          <RoomsGuests rooms={roomSelection} setRooms={setRoomSelection} />
          <FloatingBottomButton
            onClick={async () => {
              setIsRoomModalOpen(false);
              setRoomSelection({});
              Router.push(
                {
                  pathname: '/check-detail',
                  query: {
                    checkIn,
                    checkOut,
                    title,
                    room: [],
                  },
                },
                undefined,
                { shallow: true }
              );
            }}
          >
            APPLY
          </FloatingBottomButton>
        </>
      </BottomSheet>
      <BottomSheet className={'bottom-sheet-3'} title="ROOMS & GUESTS" isOpen={isRegionModalOpen} onDismiss={() => setIsRegionModalOpen(false)}>
        <div style={{ padding: 24, height: 'calc(100vh - 170px)' }}>
          <div className={styles.search}>
            <Back
              onClick={() => {
                setSearchTerm('');
              }}
            ></Back>
            <SearchBar
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></SearchBar>
          </div>
          <SearchContent searchData={SearchRegionArray} searchTerm={searchTerm} />
        </div>
      </BottomSheet>

      <div className={styles.checkDetailContainer}>
        <div className={styles.header}>
          <HeaderTitle>DETAILS</HeaderTitle>
        </div>
        <div
          className={styles.regionContainer}
          onClick={() => {
            setIsRegionModalOpen(true);
          }}
        >
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
        <FloatingBottomButton
          onClick={() => {
            Router.push({
              pathname: '/results',
              query: {
                checkIn,
                checkOut,
              },
            });
          }}
        >
          SEE RESULTS
        </FloatingBottomButton>
      </div>
    </>
  );
}

export default CheckDetail;
