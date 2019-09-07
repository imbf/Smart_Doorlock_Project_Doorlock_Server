module.exports = {
    html:function(pmWeather){
        return `<!doctype>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                table,caption,tr,td{
                    border:1px solid #444444;
                    margin:0px;
                    padding:0px;
                    border-collapse:collapse;
                }
               body{
                    margin:0px;
                    display:flex;
                    height:485px;
                    width:755px;
               }
                .container{
                    display: flex;
                    width:100%;
                    height:100%;
                    flex-direction: column;
                }
                header{
                    border-bottom:1px solid gray;
                    padding-left:20px;
                }
                footer{
                    border-top:1px solid gray;
                    padding:20px;
                    text-align: center;
                }
                .content{
                    display:flex;
                }
                .content nav{
                    border-right:1px solid gray;
                }
                .content aside{
                    border-left:1px solid gray;    
                }
                main,nav, aside{
                    flex-basis: 150px;
                    flex-shrink: 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <section class="content">
                    <nav>
                    ${this.weatherTable(pmWeather)}<br>
                    ${this.pmTable(pmWeather)}
                    </nav>
                    <main>
                        여백    
                    </main>
                    <aside>
                    ${this.doorButton()}    
                    ${this.password()}
                    ${this.SMSService()}
                    </aside>
                </section>
            </div>
        </body>
        </html>
        `;
    },    //${this.PMTable(PM,image,info)}
    image: function(pmWeather){
        if(pmWeather.dustKind === '미세먼지'){
            if(pmWeather.pm.pm10Value[0]<=30)
                return `<img src="public/좋음.PNG" style="width:182px;height:170px;overflow:hidden">`;
            else if(pmWeather.pm.pm10Value[0]<=80)
                return `<img src="public/보통.PNG" style="width:182px;height:170px;overflow:hidden">`;
            else if(pmWeather.pm.pm10Value[0]<=150)
                return `<img src="public/나쁨.PNG" style="width:182px;height:170px;overflow:hidden">`;
            else
                return `<img src="public/매우 나쁨.PNG" style="width:182px;height:170px;overflow:hidden">`;
        }else{
            if(pmWeather.pm.pm25Value[0]<=15)
            return `<img src="public/좋음.PNG" style="width:179px;height:170px;overflow:hidden">`;
            else if(pmWeather.pm.pm25Value[0]<=35)
            return `<img src="public/보통.PNG" style="width:179px;height:170px;overflow:hidden">`;
            else if(pmWeather.pm.pm25Value[0]<=75)
            return `<img src="public/나쁨.PNG" style="width:179px;height:170px;overflow:hidden">`;
            else
            return `<img src="public/매우 나쁨.PNG" style="width:179px;height:170px;overflow:hidden">`;
        }
    },
    info : function(pmWeather){
        if(pmWeather.dustKind==='미세먼지')
        return `미세먼지 농도 
        <h1>${pmWeather.pm.pm10Value[0]}㎍/㎥</h1>`;
        else
        return `초미세먼지 농도 
        <h1>${pmWeather.pm.pm25Value[0]}㎍/㎥</h1>`;
    },
    pmTable:function(pmWeather){
        return `
        <table style="width:300px ;height:200px">
            <caption style="background-color:aqua"><h2>미세먼지 알림</h2><small>(${pmWeather.pm.dataTime}기준)(${pmWeather.pm.cityName})</small></caption>
            <thead>
                <tr style="height:40px">
                    <td>
                        <form action="/fine_Dust">
                            <input type="submit" value="미세먼지" style="width:100%;height:40px;background-color:whitesmoke">
                        </form>
                    </td>
                    <td>
                        <form action="/fine_fine_Dust">
                            <input type="submit" value="초미세먼지" style="width:100%;height:40px;background-color:whitesmoke">
                        </form>    
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >
                        ${this.image(pmWeather)}
                    </td>
                    <td style="table-layout:fixed">
                        ${this.info(pmWeather)}
                    </td>
                </tr>
            </tbody>
        </table>
        `;
    },
    weatherTable:(pmWeather) => {
        var title='';
        for(i=16;i<pmWeather.weather.title[0].length;i++){
            if(i<=pmWeather.weather.title[0].length-3 && i>=pmWeather.weather.title[0].length-4);
            else
            title +=pmWeather.weather.title[0].charAt(i);
        }
        list = `<tr>`;
        for(var i=0;i<7;i++){
            if(pmWeather.detailWeather[i].day>=1)
            list += `<td style="font-size:80%;text-align:center">내일${pmWeather.detailWeather[i].hour}시</td>`;
            else
            list += `<td style="font-size:80%;text-align:center">${pmWeather.detailWeather[i].hour}시</td>`;
        }
        list = list + `</thead><tbody><tr style="font-size:90%">`
        for(var i=0;i<7;i++){
            list+=`<td style="text-align:center">
                    날씨<br> ${pmWeather.detailWeather[i].wfKor}<br><br>
                    기온<br> ${pmWeather.detailWeather[i].temp}°C<br><br>
                    풍향<br> ${pmWeather.detailWeather[i].wdKor}
            </td>`;
        }
        
        return `
        <table style="width:450px ;height:200px">
            <caption style="background-color:aqua">
                ${title}<br>
                <small style="font-size:70%">${pmWeather.weather.pubDate}기준</small>
            </caption>
            <thead>
                ${list}
                </tr>
            </tbody>
        </table>
        `;
    },
    doorButton:() =>{

        return `
        <form action="/DoorLock_Open" >
            <input type="submit" value="문열기" style="width:200px;height:100px;background-color:YellowGreen;float:right">
        </form>   
        `;
    },
    password: () => {
        return `
        <form action="/password/set" method="GET">
            <input type="submit" value="비밀번호 설정" style="width:200px;height:100px;background-color:YellowGreen;float:right">
        </form>
        `;
    },
    SMSService: () => {
        return `
        <form action="/SMSService" method="GET">
            <input type="submit" value="일회용 출입 요청 서비스" style="width:200px;height:100px;background-color:YellowGreen;float:right">
        </form>
        `;
    }
}
