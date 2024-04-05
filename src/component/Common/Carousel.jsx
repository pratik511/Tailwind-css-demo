import { useState, useRef, useEffect } from 'react';

// Data
import data from '../../../data.json';

const Carousel = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="container mx-auto my-12 carousel">
            <h2 className="mb-12 text-4xl font-semibold leading-8 text-slate-700">
                Our epic carousel
            </h2>
            <div className="relative overflow-hidden">
                <div className="absolute flex items-center justify-start w-full h-full top left">
                    <button
                        onClick={movePrev}
                        className={`z-10 w-10 h-24 p-0 m-0 text-center text-black transition-all duration-300 ease-in-out opacity-75 bg-white  ${isDisabled('prev') && "hidden"}`}
                    /* disabled={isDisabled('prev')} */
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-20 h-12 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                </div>
                <div className="absolute flex items-center justify-end w-full h-full top left">
                    <button
                        onClick={moveNext}
                        className={`z-10 w-10 h-24 p-0 m-0 text-center text-black transition-all duration-300 ease-in-out opacity-75 bg-white ${isDisabled('next') && "hidden"}`}
                    /* disabled={isDisabled('next')} */
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-20 h-12 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="relative z-0 flex gap-1 overflow-hidden carousel-container scroll-smooth snap-x snap-mandatory touch-pan-x"
                >
                    {data.resources.map((resource, index) => {
                        return (
                            <div
                                key={index}
                                className="relative w-64 h-64 text-center carousel-item snap-start"
                            >
                                <a
                                    href={resource.link}
                                    className="z-0 block w-full h-full bg-left-top bg-no-repeat bg-cover aspect-square bg-origin-padding"
                                    style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                                >
                                    <img
                                        src={resource.imageUrl || ''}
                                        alt={resource.title}
                                        className="w-full aspect-square"
                                    />
                                </a>
                                <a
                                    href={resource.link}
                                    className="absolute top-0 left-0 z-10 block w-full h-full transition-opacity duration-300 opacity-0 aspect-square hover:opacity-100 bg-blue-800/75"
                                >
                                    <h3 className="px-3 py-6 mx-auto text-xl text-white">
                                        {resource.title}
                                    </h3>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;