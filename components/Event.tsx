interface EventParams {
  title: string;
  host: string;
  location: string;
  time: Date;
  thumbnail: string;
}

export function Event({
  title,
  host,
  location,
  time,
  thumbnail
}: EventParams) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[time.getMonth()];
  
  const hour = time.getHours() % 12 ? time.getHours() % 12 : 12;
  const minute = time.getMinutes() > 9 ? time.getMinutes() : '0'+time.getMinutes();
  const meridiem = time.getHours() >= 12 ? "pm" : "am";
  
  return(
    <div class="bg">
      <div class="w-full aspect-banner">
        <img class="object-cover h-full w-full" src={thumbnail} />
      </div>
      <div class="h-24 w-full flex">
        <div class="h-16 w-16 aspect-square m-2 bg-gradient flex flex-col">
          <div class="w-full h-gold-s body-bold color-primary text-sm text-center" style="line-height: 2.5; letter-spacing: 0;">{ month }</div>
          <div class="w-full h-gold-l body-bold color-primary text-2xl text-center">{ time.getDate() }</div>
        </div>
        <div class="h-full w-full mt-1.5 ml-0.5">
          <div class="body-regular color-secondary text-sm h-4">{ host }</div>
          <div class="body-bold color-primary text-base h-5">{ title }</div>
          <div class="h-4 mt-0.5 body-regular color-secondary text-sm flex">
            <div>
              <span class="material-symbols-outlined text-base leading-5 align-bottom">schedule</span>
              <span class=""> { `${hour}:${minute}${meridiem}` }</span>
            </div>
            <div className="ml-2">
              <span class="material-symbols-outlined text-base leading-5 align-bottom">location_on</span>
              <span> { location }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}