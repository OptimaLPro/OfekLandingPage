import NormanLogo from "/Norman.png";
import NormaniPhone from "/NormaniPhone.png";
import Norman1 from "/Norman1.png";
import Norman2 from "/Norman2.png";
import Norman3 from "/Norman3.png";
import Norman4 from "/Norman4.png";
import Norman5 from "/Norman5.png";

const Norman = () => {
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
                        <img src={NormanLogo} width={250} className="mt-20"></img>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-10 p-6 max-lg:items-center lg:gap-32 lg:mt-16 lg:p-0 lg:flex-row">
                    <div>
                        <img src={NormaniPhone} width={450} className="lg:mb-20 drop-shadow-2xl"></img>
                    </div>
                    <div className="flex flex-col justify-around gap-10 lg:mb-20 lg:gap-0">
                        <img src={Norman1} className="shadow-2xl" width={400}></img>
                        <img src={Norman2} className="shadow-2xl" width={400}></img>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-center p-6 lg:gap-32 lg:flex-row max-lg:items-center lg:p-0">
                        <div className="flex flex-col gap-10 mb-16 lg:justify-around lg:flex-row">
                            <img src={Norman3} className="w-full shadow-2xl lg:w-auto lg:max-w-xs" alt="Norman 3"></img>
                            <img src={Norman4} className="w-full shadow-2xl lg:w-auto lg:max-w-xs" alt="Norman 4"></img>
                            <img src={Norman5} className="w-full shadow-2xl lg:w-auto lg:max-w-xs" alt="Norman 5"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Norman;