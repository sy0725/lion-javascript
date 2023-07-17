/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;


// console.log(1);

const timer = setTimeout(()=>{
    // console.log('몇 초 뒤에 나옵니다.');
    // console.log(2);
},3000) // 시간이 지나고 출력된다  시간을 지정 1000ms = 1초  출력의 순서를 강제로 바꿀 수 있다


// clearTimeout(timer)   method 를 사용하면 시간이 가기전에 멈출 수있다.

// console.log(3);

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

const cancelInterval = setInterval(()=>{
    // console.log('이 코드는 1초마다 나온다');
},1000)    // 시간마다 반복되는 코드를 만듭니다.

// clearInterval(cancelInterval)  실행하면 clearTimeOut 처럼 실행이 정지된다.


/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */




/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;

// http://localhost:5500/index.html?type=listing&page=2#title  = href

// http = protocol

// http://localhost = host

// http://localhost:5500 = port (포트넘버) 

// http://localhost:5500/index.html = pathname (경로명)

// http://localhost:5500/index.html?type=listing&page=2 = search  / 재할당 가능 location.search = ...

// http://localhost:5500/index.html?type=listing&page=2#title = hash / 재할당 가능  location.hash = ...

// location.replace('http://www.naver.com') 하게된다면 페이지로 이동. 하지만 이건 돌아올 수 없다.

// location.href('http://www.naver.com') 이건 페이지로 이동하지만 다시 돌아올순있다.


const urlParams = new URLSearchParams(location.search);

for(const value of urlParams) {
    console.log(value);
}

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;


// platform = 브라우저가 실행되는 플랫폼 정보를 반환

// userAgent = 브라우저와 운영체제를 정보를 반환

// language = 브라우저에서 사용되는 언어를 반환

// online = 브라우저가 온라인인지 여부를 반환

// geolocation = 브라우저에서 위치 허용


function browserName(){
    const agent = userAgent.toLowerCase();
    let browserName;
  
    switch (true) {
      case agent.indexOf('edge') > -1: browserName = 'MS edge'; break;
      case agent.indexOf('opr') > -1: browserName = 'Opera'; break;
      case agent.indexOf('chrome') > -1: browserName = 'chrome'; break;
      case agent.indexOf('firefox') > -1: browserName = 'Mozilla Firefox'; break;
    
      default:
        browserName = '혹시.. IE?'
        break; 
    }
  
    return browserName;
  }


  function browserName() {
    const agent = userAgent.toLowerCase();
    let browserName;
    switch (true) {
      case agent.indexOf('edge') > -1:
        browserName = 'MS edge';
        break;
      case agent.indexOf('opr') > -1:
        browserName = 'Opera';
        break;
      case agent.indexOf('chrome') > -1:
        browserName = 'Chrome';
        break;
      case agent.indexOf('trident') > -1:
        browserName = '🤬IE ?';
        break;
      case agent.indexOf('firefox') > -1:
        browserName = 'Mozilla Firefox';
        break;
      case agent.indexOf('safari') > -1:
        browserName = 'Safari';
        break;
  
      default:
        browserName = 'other';
        break;
    }
    return browserName;
  }
  
  browserName();


// geolocation

  function getLocationPosition(){

    return new Promise((resolve, reject) => {
      geolocation.getCurrentPosition((data)=>{
  
        if(!data){
          reject({message:'위치 서비스를 활성화 해주세요.'})
        }else{
          const {latitude,longitude} = data.coords;
          console.log(2);
          resolve({latitude,longitude})
        }
      })
    })
  }

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

// height = 모니터 사이즈
// availHeight = 부라우저의 크기
// innerHeight = 브라우저 해상도 크기 /  제일 많이 사용된다.

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

navigator.mediaDevices.getUserMedia({video:true})
