import React, { Fragment, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Navbar, HotelCard,Categories } from '../../component';
import './Home.css'
import axios from 'axios';
import { useCategory } from '../../Context';
export const Home = () => {
  const [hotel, setHotel] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [testData, setTestData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(16);
  const {hotelCategory} = useCategory();


  useEffect(() => {
    ((async () => {
      try {
        const { data } = await axios.get(
          `https://travel-backend-app.cyclic.app/api/hotels?category=${hotelCategory}`
        
          );
        setTestData(data);
        setHotel(data ? data.slice(0, 16) : []);

      } catch (err) {
        console.log(err);
      }
    }))();
  }, [hotelCategory]);

  const fetchMoreData = () => {
    if (hotel.length >= testData.length){
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotel && hotel.length > 0) {
        setHotel(hotel.concat(testData.slice(currentIndex,currentIndex+16)));
        setCurrentIndex((prev) => prev + 16);
      } else {
        setHotel([]);
      }
    }, 1000);
  }
  
  return (
    <Fragment>
      <Navbar />
      <Categories/>
      {
        hotel && hotel.length > 0 ? (
          <InfiniteScroll
            dataLength={hotel.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={hotel.length > 0 && <h3 className='text-alert'>loading....</h3>}
            endMessage={<p className='text-alert'>You Have seen it all</p>}
          >
            <main className='main d-flex align-center gap-largr'>
              {
                hotel && hotel.map((hotels) => (
                  <HotelCard key={hotels._id} hotels={hotels} />
                ))
              }
            </main>
          </InfiniteScroll>
        ) : (<> </>)
      }
    </Fragment>
  )
}

