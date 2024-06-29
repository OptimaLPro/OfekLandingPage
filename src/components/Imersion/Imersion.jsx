import ImersionLogo from "/Imersion.png";
import Imersion1 from "/Imersion1.png";
import Imersion2 from "/Imersion2.png";
import Imersion3 from "/Imersion3.png";
import Imersion4 from "/Imersion4.png";
import Imersion5 from "/Imersion5.png";
import Imersion6 from "/Imersion6.png";
import Imersion7 from "/Imersion7.png";
import Imersion8 from "/Imersion8.png";
import "./Imersion.css";

const Imersion = () => {
    return (
        <>
            <div className="bg-zinc-800">
                <div className="flex flex-col items-center justify-center text-right text-white heebo-font background-pattern">
                    <div>
                        <img src={ImersionLogo} className="mt-20"></img>
                    </div>
                    <div className="w-[70%] mt-20 flex flex-col gap-10 text-xl">
                        <p className="text-5xl font-bold">בתל אביב imerSion השקת מסעדת</p>
                        <p>מסעדת אימרסיון היא המסעדה האימרסיבית הראשונה בישראל שבה משלבים קולינריה תוך שימוש בטכנולוגיות ייחודיות ומטריפות שיוצרות לסועדים בה חוויה מיוחדת במינה. הערכים של המסעדה הם - חדשנות, חוויה, דמיון וסודיות</p>
                        <p>המהלך השיווקי היה בנוי מ3 שלבים - טיזר, השקה, ניהול שוטף במספר פלטפורמות.</p>
                        <div>
                            <p> - הקונספט</p>
                            <p>אימרסיון היא לא עוד מסעדה שמציעה חוויה קולינרית "רגילה", אוכל הוא רק חלק אחד מתוך חווית 360 מעוררת חושים. בעזרת הטכנולוגיה הייחודית והצוות, 18 סועדים נכנסים לסעודה בת 3 שעות בה שהיא בעצם כניסה ל7 עולמות שונים ביניהם - ג'ונגל,
                                מתחת למים, קרקס ועוד</p>
                        </div>
                        <div>
                            <p> - טיזר</p>
                            <p>כיוון שזוהי הפעם הראשונה שמסעדה בקונספט "אימרסיבי" הגיעה לישראל, היה צורך בהיכרות ראשונית וחינוך שוק לקונספט
                                השלב הראשון היה יצירת סקרנות וחשיפת הקונספט לקהל</p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-10">
                        <img src={Imersion1} className="shadow-2xl"></img>
                        <img src={Imersion2} className="shadow-2xl"></img>
                        <img src={Imersion3} className="shadow-2xl"></img>
                    </div>
                    <div className="w-[70%] my-14 flex flex-col gap-10 text-xl">
                        <div>
                            <p> - השקה</p>
                            <p>.לאחר יצירת הסקרנות, קמפיין ההשקה היה בנוי מכמה קונספטים קריאטיביים למשיכת הקהל</p>
                        </div>
                        <div>
                            <p> - THIS IS NOT JUST A RESTUARANT</p>
                            <p>.אימרסיון היא לא רק מסעדה, היא חוויה מרגשת ומרהיבה שמפעילה את כל החושים</p>
                        </div>
                    </div>
                    <div className="flex gap-16">
                        <img src={Imersion4} className="shadow-2xl"></img>
                        <img src={Imersion5} className="shadow-2xl"></img>
                        <img src={Imersion6} className="shadow-2xl"></img>
                    </div>
                    <div className="w-[70%] my-14 flex flex-col gap-10 text-xl">
                        <div>
                            <p> - TICKETS FOR 18, PLEASE</p>
                            <p>.אימרסיון מעניקה ל18 אנשים ערב מיוחד בו הם הדמויות הראשיות והזרקור מופנה אל כל אחד ואחד מהם באופן אישי</p>
                        </div>
                    </div>
                    <div className="flex gap-16 mb-20">
                        <img src={Imersion7} className="shadow-2xl"></img>
                        <img src={Imersion8} className="shadow-2xl"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Imersion;