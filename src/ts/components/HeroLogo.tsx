import { ReactComponent as Logo} from '@/assets/logo-main.svg';
import { useRef, useEffect } from "react";
import gsap from "gsap";


const HeroLogo = () => {
    const wrapper = useRef<HTMLInputElement>(null);

    useEffect(() => {

        const [elements] = wrapper.current?.children;

        const bottomLine = elements.getElementById('bottom_line');
        const leftPerson = elements.getElementById('left_person');
        const rightPerson = elements.getElementById('right_person');
        const verticalLine = elements.getElementById('vertical_line');
        const horizontalLine = elements.getElementById('horizontal_line');

        const Paper_1 = elements.getElementById('1_paper');
        const Paper_2 = elements.getElementById('2_paper');
        const Paper_3 = elements.getElementById('3_paper');
        const Paper_4 = elements.getElementById('4_paper');
        const Paper_5 = elements.getElementById('5_paper');

        gsap.set([bottomLine, leftPerson, rightPerson, verticalLine, horizontalLine, Paper_1, Paper_2, Paper_3, Paper_4, Paper_5], { autoAlpha: 0 });
        const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
        tl.fromTo(bottomLine, { x: '-800' }, { duration: 1.5, x: '+=800', autoAlpha: 1 })
            .fromTo(leftPerson, {scale: '0'}, {duration: 1.5, scale: '1', autoAlpha: 1})
            .fromTo(Paper_2, {y: '0'}, {duration: 1, y: '0', autoAlpha: 1})
            .fromTo(rightPerson, {scale: '0'}, {duration: 1.2, scale: '1', autoAlpha: 1})
            .fromTo(Paper_1, {y: '0'}, {duration: 1, y: '0', autoAlpha: 1})
            .fromTo(verticalLine, {y: '-500'}, {duration: 1, y: '+=500', autoAlpha: 1})
            .fromTo(horizontalLine, {y: '0'}, {duration: 1, y: '0', autoAlpha: 1})
            .fromTo(Paper_3, {y: '0'}, {duration: 1, y: '0', autoAlpha: 1})
            .fromTo(Paper_4, {y: '0'}, {duration: 1, y: '0', autoAlpha: 1})
            .fromTo(Paper_5, {y: '0'}, {duration: 1, y: '0', autoAlpha: 1})

    }, []);
    return (
        <div className="box" ref={wrapper}>
            <Logo />
        </div>
    );
};

export default HeroLogo;
