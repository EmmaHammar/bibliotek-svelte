function GetHolidays (cb) {

    fetch(`https://sholiday.faboul.se/dagar/v2.1/2021/02`)
    .then(response => response.json())
    .then(data => {
        console.log("Holidaysdata:", data);

        //cb tillbaka till app:
        cb(data)
    });

}

export default GetHolidays;



const [holidayArr, setHolidayArr] = useState([]);
app:
useEffect( () => {
    GetHolidays( (data) => {
      console.log("GetHolidasArr fr fetch", data.dagar);
      const getHolidayData = data.dagar;
      console.log("holidayData i App.js", getHolidayData); 
      setHolidayArr(getHolidayData);
      console.log("holidayData efter state", holidayArr); //funkar bara ibland

    });
  }, []) 


  <MyCalendar masterArr={masterArr} addTask={ addTask } deleteTask={deleteTask} doUpdate={doUpdate} isUpdate={isFinish} holidayArr = {holidayArr} />


  ===
  mycalendar:

  useEffect( () => {
    GetHolidays( (data) => {
      console.log("GetHolidasArr fr fetch", data.dagar);
      const getHolidayData = data.dagar;
    //   console.log("holidayData i MyCalendar.js", getHolidayData); //funkar
      setHolidayArr(getHolidayData);
      console.log("holidayData efter state", holidayArr); //funkar bara ibland

    });
  }, []) 

      //hämta från API? Alt kalla på en funktion i app som hämtar Api?
      const printHolidays = (day, task) => {


        //Get 2 arrays to compare
        // console.log("holidayArr state", props.holidayArr);
        // console.log("holidayArr i MyCalendar", holidayArr);

        for (let i in masterArr) {
            // console.log("hitta datum i kalender", masterArr[i].date); //Funkar
           
        }
        //compare if date is same

        //if date is same compare if "röd dag" is yes

    }


    
    
    {printHolidays(day)}
