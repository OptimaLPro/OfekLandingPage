import "./Perrier.css";
import BeachPaint from "/BeachPaint.png";
import PerrierLogo from "/Perrier.png";
import SS1 from "/SS1.png";
import SS2 from "/SS2.png";

const Perrier = () => {
    return (
        <>
            <div className="h-screen background">
                <img src={PerrierLogo} className="absolute scale-90"></img>

                <div className="grid grid-cols-12 gap-4">
                    <div className="flex flex-col justify-center h-screen col-span-3">
                        <div className="p-20 mt-32">
                            <img src={SS1} className="object-contain mx-auto mb-10 shadow-2xl"></img>
                            <img src={SS2} className="object-contain mx-auto shadow-2xl"></img>
                        </div>
                    </div>
                    <div className="col-span-5 ">
                        <div className="flex items-center justify-end h-screen text-white">
                            <div className="grid grid-rows-4 gap-8 mr-10 text-xl text-right">
                                <div className="flex items-end justify-end row-span-4 text-[50px] heebo-font font-bold tracking-wider">
                                    <p>THE SPARKLING MOMENT</p></div>
                                <div className="row-span-4 text-2xl heebo-font">
                                    <p>מטרת הפרויקט - לחזק את הההתלהבות וה"באזז" כלפי המותג</p>
                                    <p>.ולחזק את מיצובו כמותג פרימיום שמקדם אמנות ישראלית מודרנית</p>
                                </div>
                                <div className="row-span-4 text-2xl heebo-font">
                                    <p>"הבצפר" X PERRIER שת"פ</p>
                                    <p>PERRIER התבקשנו ליצור פרשנות וקריאטיבית למפגש בין המותג</p>
                                    <p>.בעיר תל אביב תוך שימוש שימוש בבקבוק האייקוני SPARKLING MOMENTS לבין</p>
                                </div>
                                <div className="row-span-4 text-2xl heebo-font">
                                    <p>כשקיבלנו את המשימה ניסינו לחשוב - איך בעצם אפשר להעביר רגעים</p>
                                    <p>?בעיר תל אביב בצורה האותנטית ביותר</p>
                                    <p>הגענו למסקנה שאין יותר אותנטי כמו דרך העיניים, ובטח העיניים של</p>
                                    <p>.חברו הטוב ביותר של האדם, הכלב</p>
                                    <p>בתל אביב לכלב יש מעמד ייחודי, מתייחסים אליו כתושב מן המניין. הוא</p>
                                    <p>זוכה לכרטיס הטבות - 'דיגידוג' והכניסה שלו לכל מקום בעיר לא מוטלת</p>
                                    <p>בספק. שווה בין שווים. הרגעים המרגשים, המשמעותיים והאותנטיים</p>
                                    <p>ביותר שקורים בעיר, קורים איתו. אנחנו מגדירים את זה - רגעים בין איש</p>
                                    <p>.לכלבו</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 ">
                        <img src={BeachPaint} className="object-contain h-screen p-10"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Perrier;