declare module 'react-bootstrap-carousel' {
    import * as React from 'react';
  
    interface CarouselProps<T> {
      responsive?: any;
      children: React.ReactElement<CarouselItemProps<T>>[] | React.ReactElement<CarouselItemProps<T>>;
    }
  
    interface CarouselItemProps<T> {
      data?: T[];
      children: React.ReactNode;
      className?: string;
    }
  
    interface MultiCarouselProps<T> extends CarouselProps<T> {
      slideAreaClassName?: string;
      additionalTransfrom?: number;
      arrows?: boolean;
      autoPlay?: boolean;
      autoPlaySpeed?: number;
      centerMode?: boolean;
      className?: string;
      containerClass?: string;
      customButtonGroup?: React.ReactNode;
      customDotGroup?: React.ReactNode;
      deviceType?: string;
      dotListClass?: string;
      draggable?: boolean;
      focusOnSelect?: boolean;
      infinite?: boolean;
      itemClass?: string;
      itemPadding?: number | object;
      keyBoardControl?: boolean;
      minimumTouchDrag?: number;
      renderButtonGroupOutside?: boolean;
      renderDotsOutside?: boolean;
      removeArrowOnDeviceType?: string | Array<string>;
      renderDots?: boolean;
      responsive?: any;
      showDots?: boolean;
      sliderClass?: string;
      slidesToSlide?: number;
      swipeable?: boolean;
      transitionDuration?: number;
      transitionTimingFunction?: string;
      useCSS?: boolean;
      beforeChange?: (oldIndex: number, newIndex: number) => void;
      afterChange?: (currentSlideIndex: number) => void;
    }
  
    export class Carousel<T> extends React.Component<CarouselProps<T>> {}
    export class CarouselItem<T> extends React.Component<CarouselItemProps<T>> {}
    export class MultiCarousel<T> extends React.Component<MultiCarouselProps<T>> {}
  }
  