export function Rain(count){

  for (var i = 0;i<count;i++){

  }

  return (
    <div className="rainWrapper" style={{position:'relative'}}/>
  )
}


//this is lazy as hell but I didn't want to learn tailwind when making this proejct :|. Also I stole most of it from https://github.com/willnickerson/react-rain-animation/blob/master/lib/style.css
const DROP_STYLE = {
  position:'absolute',
  background:"gradient(linear,0% 0%,0% 100%, from(rgba(13,52,58,1) ), to(rgba(255,255,255,0.5)) )",
  width:'1px',
  height:'80px',

}
