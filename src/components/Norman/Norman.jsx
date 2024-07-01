import { motion } from "framer-motion";
import useAnimateOnInView from '../../hooks/useAnimateOnInView';
import NormanLogo from "/Norman.png";
import Norman1 from "/Norman1.png";
import Norman2 from "/Norman2.png";
import Norman3 from "/Norman3.png";
import Norman4 from "/Norman4.png";
import Norman5 from "/Norman5.png";
import NormaniPhone from "/NormaniPhone.png";

const Norman = () => {
    const NormanLogoAnimation = useAnimateOnInView();
    const NormaniPhoneAnimation = useAnimateOnInView();
    const Norman1Animation = useAnimateOnInView();
    const Norman2Animation = useAnimateOnInView();
    const Norman3Animation = useAnimateOnInView();
    const Norman4Animation = useAnimateOnInView();
    const Norman5Animation = useAnimateOnInView();

    return (
        <>
            <div className="bg-[#fdf3e7] h-max">
                <div className="flex flex-col-reverse gap-10 text-right lg:flex-row lg:justify-center lg:items-end heebo-font">
                    <div className="lg:w-[60%] text-[#743956] lg:text-2xl">
                        <p className="mb-5 text-[60px] font-bold text-center lg:text-right rtl">הפרצוף אומר הכל</p>
                        <div className="max-lg:text-[20px] p-4 lg:p-0 rtl">
                            <p className="lg:w-[60%]">סטודיו נורמן הוא סטודיו צעיר ודינמי המורכב מאמנים צעירים ושאפתניים. הסטודיו מציע מגוון של יצירות אישיות המבוססות על תמונות הלקוח ומדפיס אותן על אקססוריז שונים כמו גרביים, תיקים, כפפות תנור, בוקסרים וכו'.</p>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start lg:w-[40%]">
                        <motion.img src={NormanLogo} {...NormanLogoAnimation} width={250} className="mt-20"></motion.img>

                    </div>
                </div>
                <div className="flex flex-col justify-center gap-10 p-6 max-lg:items-center lg:gap-32 lg:mt-16 lg:p-0 lg:flex-row">
                    <div>
                        <motion.img src={NormaniPhone} {...NormaniPhoneAnimation} width={450} className="lg:mb-20 drop-shadow-2xl"></motion.img>
                    </div>
                    <div className="flex flex-col justify-around gap-10 lg:mb-20 lg:gap-0">
                        <motion.img src={Norman1} {...Norman1Animation} className="shadow-2xl" width={400}></motion.img>
                        <motion.img src={Norman2} {...Norman2Animation} className="shadow-2xl" width={400}></motion.img>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-center p-6 lg:gap-32 lg:flex-row max-lg:items-center lg:p-0">
                        <div className="flex flex-col gap-10 mb-16 lg:justify-around lg:flex-row">
                            <motion.img src={Norman3} {...Norman3Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs" alt="Norman 3"></motion.img>
                            <motion.img src={Norman4} {...Norman4Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs" alt="Norman 4"></motion.img>
                            <motion.img src={Norman5} {...Norman5Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs" alt="Norman 5"></motion.img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Norman;