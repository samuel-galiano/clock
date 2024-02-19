/**
  * @Author Samuel Manfio Galiano
  * @Date 16/08/2023
  * @CreatedIn 3Hours
  * @Description personal project created in free working hours.
  * Component used by HTML to detect and send the user's system date and time to the website.
  */

const hourClock = document.getElementById('hour')
const minuteClock = document.getElementById('minute')
const secondClock = document.getElementById('second')
const dayClock = document.getElementById('day')
const monthClock = document.getElementById('month')
const yearClock = document.getElementById('year')

const clockAutomated = setInterval(function time() {
    let dateToday = new Date()

    let getHour = String(dateToday.getHours())
    let getMinute = String(dateToday.getMinutes())
    let getSecond = String(dateToday.getSeconds())
    let getDay = String(dateToday.getDate())
    let getMonth = String(dateToday.getMonth() + 1)
    let getYear = String(dateToday.getFullYear())

    if (getHour < 10) { getHour = '0' + getHour }
    if (getMinute < 10) { getMinute = '0' + getMinute }
    if (getSecond < 10) { getSecond = '0' + getSecond }
    if (getDay < 10) { getDay = '0' + getDay }
    if (getMonth < 10) { getMonth = '0' + getMonth }

    hourClock.textContent = getHour + ",";
    minuteClock.textContent = getMinute + ",";
    secondClock.textContent = getSecond + ",";
    dayClock.textContent = getDay + ",";
    monthClock.textContent = getMonth + ",";
    yearClock.textContent = getYear;
})

