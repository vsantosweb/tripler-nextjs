import React, { useState, useEffect, useRef } from 'react'
import * as Collection from './style';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import CardEvent from '../../components/Cards/CardEvent';

SwiperCore.use([Navigation]);

const mediaSizes = {
    320: { slidesPerView: 1.6, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 5, spaceBetween: 30 }
}

export default function CategoryCollection({ data }: any) {
    return (
        data.map((category, key) => (
            <Collection.Container key={key}>
                <Collection.Header>
                    <Collection.Title>{category.name} </Collection.Title>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className={`slideNav el-${category.id}-prev `}><i className={'las la-angle-left'}></i></button>
                        <button className={`slideNav el-${category.id}-next`}><i className={'las la-angle-right'}></i></button>
                    </div>
                </Collection.Header>

                <Swiper
                    navigation={{ nextEl: `.el-${category.id}-next`, prevEl: `.el-${category.id}-prev` }}
                    direction="horizontal"
                    spaceBetween={10}
                    slidesPerView={2.3}
                    breakpoints={mediaSizes}
                    freeMode={true}
                >
                    {category.trips.map((trip, key) => (
                        <SwiperSlide key={key} >
                            <CardEvent key={key} data={trip} category={category} image={'https://picsum.photos/id/' + Math.floor(Math.random() * 500) + '/500/350.jpg'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Collection.Container>

        ))
    )
}