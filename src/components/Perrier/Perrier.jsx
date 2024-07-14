import { motion } from "framer-motion";
import useAnimateOnInView from '../../hooks/useAnimateOnInView';
import "./Perrier.css";
import BeachPaint from "/BeachPaint.png";
import PerrierLogo from "/Perrier.png";
import SS1 from "/SS1.png";
import SS2 from "/SS2.png";

const Perrier = () => {

    const perrierLogoAnimation = useAnimateOnInView();
    const ss1Animation = useAnimateOnInView();
    const ss2Animation = useAnimateOnInView();

    return (
        <>
            <div className="lg:h-screen background">
                <motion.img
                    src={PerrierLogo}
                    {...perrierLogoAnimation}
                    className="absolute scale-90"
                />                <div className="gap-4 lg:grid lg:grid-cols-12">
                    <div className="flex flex-col justify-center col-span-3 lg:h-screen">
                        <div className="p-10 mt-60 lg:p-20 lg:mt-32">
                            <motion.img src={SS1}
                                {...ss1Animation}
                                className="object-contain mx-auto mb-10 shadow-2xl"></motion.img>
                            <motion.img src={SS2}
                                {...ss2Animation}
                                className="object-contain mx-auto shadow-2xl"></motion.img>
                        </div>
                    </div>
                    <div className="lg:col-span-5 ">
                        <div className="flex items-center justify-end text-white lg:h-screen">
                            <div className="grid-rows-4 gap-8 p-4 text-[30px] text-center lg:text-right lg:text-xl grid lg:p-0 xl:mr-10">
                                <div className="lg:flex lg:items-end lg:justify-end row-span-4 text-[50px] lg:w-1/2 lg:ml-auto xl:w-full leading-10 lg:text-right text-center heebo-font font-bold tracking-wider">
                                    <p>THE SPARKLING MOMENT</p></div>
                                <div className="row-span-4 text-2xl heebo-font rtl">
                                    <p>מטרת הפרויקט – לעורר התלהבות ו"באזז" כלפי המותג ולחזק את מיצובו כמותג פרימיום שמקדם אמנות ישראלית מודרנית.</p>
                                </div>
                                <div className="row-span-4 text-2xl heebo-font rtl">
                                    <p>שת"פ "הבצפר" PERRIER X</p>
                                    <p>התבקשנו ליצור פרשנות קריאטיבית למפגש בין המותג PERRIER לבין SPARKLING MOMENTS בעיר תל אביב תוך שימוש בבקבוק האייקוני.</p>
                                </div>
                                <div className="row-span-4 text-2xl heebo-font rtl">
                                    <p>כשקבלתי את המשימה ניסיתי לחשוב – איך בעצם אפשר להעביר רגעים בעיר תל אביב בצורה האותנטית ביותר?</p>
                                    <p>הגעתי למסקנה שאין יותר אותנטי כמו דרך העיניים, ובטח העיניים של חברו הטוב ביותר של האדם, הכלב. בתל אביב לכלב יש מעמד ייחודי, מתייחסים אליו כתושב מן המניין. הוא זוכה לכרטיס הטבות -  "דיגידוג" והכניסה שלו לכל מקום בעיר לא מוטלת בספק. שווה בין שווים. הרגעים המרגשים, המשמעותיים והאותנטיים ביותר שקורים בעיר, קורים יחד איתו. אני מגדיר את זה – רגעים בין איש לכלבו.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:col-span-4">
                        <img src={BeachPaint} className="object-contain p-10 lg:h-screen"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Perrier;