/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { View, Text, ImageBackground } from 'react-native';
import { CarouselItemProps } from './types';
import styled from 'shakl';
import { Dimensions } from 'react-native';

const CarouselItem = styled.View({ backgroundColor: '#fff', width: '100%', height: '100%' }); 
const CarouselPagination = styled.View({position: 'absolute', bottom: 0});
// const CarouselPagination = styled.Pagination().attrs({ dotsLength: 2})
const BoardingCarousel = () => {

    const _renderItem = ({item}: {
        item: CarouselItemProps,
    }) => {
        return (
            <CarouselItem
            >
                <ImageBackground
                    source={require('../../assets/onboarding/1.png')}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%'}}
                >
                <Text>{ item.title }</Text>
                </ImageBackground>
            </CarouselItem>
        );
    };
    const data = [{
        img: require('../../assets/onboarding/1.png'),
        title: '1234',
    }, {
        title: '12345',
    }];
    const sliderWidth = Dimensions.get('window').width;
    return (
        <View>
        <Carousel
            data={data}
            renderItem={_renderItem}
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
        />
        <CarouselPagination>
            <Pagination
                dotsLength={2}
                activeDotIndex={1}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(0, 0, 0  , 0.92)',
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </CarouselPagination>
        </View>
    );
};

export default BoardingCarousel;
