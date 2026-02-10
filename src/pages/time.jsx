import '../components/workday.css';

export function Time(){
    return (
        <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        </style>

        <div className='largeTitle'>
            <h>Time</h>
        </div>

        {/* Hours Worked / Clock in Out */}

        <div className=''>
            <h className='mediumHeading'>&lt;date&gt; - &lt;x&gt; hours &lt;x&gt; minutes</h>
            <p>clock in/ out buttons here</p>
        </div>
        
        <div className='mediumHeading'>
            <h>Time Sheet -&gt;</h>
        </div>

        <div className='mediumHeading'>
            <h>Insert graph below</h>
        </div>

        </>
    )

}