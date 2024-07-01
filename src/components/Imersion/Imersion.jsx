import { motion } from "framer-motion";
import useAnimateOnInView from '../../hooks/useAnimateOnInView';
import "./Imersion.css";
import ImersionLogo from "/Imersion.png";
import Imersion1 from "/Imersion1.png";
import Imersion2 from "/Imersion2.png";
import Imersion3 from "/Imersion3.png";
import Imersion4 from "/Imersion4.png";
import Imersion5 from "/Imersion5.png";
import Imersion6 from "/Imersion6.png";
import Imersion7 from "/Imersion7.png";
import Imersion8 from "/Imersion8.png";


const Imersion = () => {
    const ImersionLogoAnimation = useAnimateOnInView();
    const Imersion1Animation = useAnimateOnInView();
    const Imersion2Animation = useAnimateOnInView();
    const Imersion3Animation = useAnimateOnInView();
    const Imersion4Animation = useAnimateOnInView();
    const Imersion5Animation = useAnimateOnInView();
    const Imersion6Animation = useAnimateOnInView();
    const Imersion7Animation = useAnimateOnInView();
    const Imersion8Animation = useAnimateOnInView();

    return (
        <>
            <div className="bg-zinc-800">
                <div className="flex flex-col items-center justify-center text-right text-white heebo-font background-pattern">
                    <div>
                        <motion.img src={ImersionLogo} {...ImersionLogoAnimation} className="p-6 mt-20 lg:p-0"></motion.img>
                    </div>
                    <div className="w-[70%] mt-20 flex flex-col gap-10 text-xl rtl">
                        <p className="text-5xl font-bold">השקת מסעדת IMERSION בתל אביב</p>
                        <p>מסעדת אימריסיון היא המסעדה האימרסיבית הראשונה בישראל שבה משלבים קולינריה תוך שימוש בטכנולוגיות ייחודיות ומטריפות שיוצרות לסועדים בה חוויה מיוחדת במינה. הערכים של המסעדה הם – חדשנות, חוויה, דמיון וסודיות.</p>
                        <p>המהלך השיווקי היה מורכב מ-3 שלבים – טיזר, השקה וניהול שוטף במספר פלטפורמות.</p>
                        <div>
                            <p>הקונספט -</p>
                            <p>אימרסיון היא לא עוד מסעדה, אוכל הוא רק חלק אחד מתוך חווית 360 מעוררת חושים.
                                בעזרת הטכנולוגיה הייחודית והצוות, 18 סועדים נכנסים לסעודה בת 3 שעות שהיא בעצם כניסה ל-7 עולמות שונים, בינהם – ג'ונגל, מתחת למים, קרקס ועוד.
                            </p>
                        </div>
                        <div>
                            <p>טיזר -</p>
                            <p>כיוון שזוהי הפעם הראשונה שמסעדה בקונספט "אימרסיבי" הגיעה לישראל, היה צורך בהיכרות ראשונית וחינוך השוק לקונספט. השלב הראשון היה יצירת סקרנות וחשיפת הקונספט לקהל.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 mt-10 lg:p-0 lg:flex-row">
                        <motion.img src={Imersion1} {...Imersion1Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs 2xl:max-w-md" alt="Imersion 1"></motion.img>
                        <motion.img src={Imersion2} {...Imersion2Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs 2xl:max-w-md" alt="Imersion 2"></motion.img>
                        <motion.img src={Imersion3} {...Imersion3Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs 2xl:max-w-md" alt="Imersion 3"></motion.img>
                    </div>
                    <div className="w-[70%] my-14 flex flex-col gap-10 text-xl  rtl">
                        <div>
                            <p>השקה -</p>
                            <p>לאחר יצירת הסקרנות, קמפיין ההשקה היה בנוי מכמה קונספטים קריאטיביים למשיכת הקהל.</p>
                        </div>
                        <div>
                            <p>THIS IS NOT JUST A RESTAURANT - </p>
                            <p>אימרסיון היא לא רק מסעדה, היא חוויה מרגשת ומרהיבה שמפעילה את כל החושים.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 lg:p-0 lg:flex-row">
                        <motion.img src={Imersion4} {...Imersion4Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs 2xl:max-w-md"></motion.img>
                        <motion.img src={Imersion5} {...Imersion5Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs 2xl:max-w-md"></motion.img>
                        <motion.img src={Imersion6} {...Imersion6Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs 2xl:max-w-md"></motion.img>
                    </div>
                    <div className="w-[70%] my-14 flex flex-col gap-10 text-xl rtl">
                        <div>
                            <p>TICKETS FOR 18, PLEASE - </p>
                            <p> אימרסיון מעניקה ל18 אנשים ערב מיוחד בו הם הדמויות הראשיות והזרקור מופנה אל כל אחד ואחד מהם באופן אישי.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 p-6 mb-20 lg:flex-row lg:p-0">
                        <motion.img src={Imersion7} {...Imersion7Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs 2xl:max-w-md"></motion.img>
                        <motion.img src={Imersion8} {...Imersion8Animation} className="w-full shadow-2xl lg:w-auto lg:max-w-xs 2xl:max-w-md"></motion.img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Imersion;