const request = require('request');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const PMServiceKey = 'zaVctsSrXI%2Br%2F420F3emchkWQHkEv15G8h6plqD674I2f1ef35M39%2Fvum2EU9s5yV7%2Bl%2Fmj9QZntI20uOf9Tyg%3D%3D';
const PMUrl = `http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst?sidoName=%EA%B2%BD%EA%B8%B0&searchCondition=HOUR&pageNo=2&numOfRows=10&ServiceKey=${PMServiceKey}`;
const weatherUrl ='http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=4113564000'
request(PMUrl,function(error,response,body){
   console.log(body);
   /*
   console.log(body);
    parser.parseString(body,function(error2,result){
        if(error2){
           throw error2;
        }
        var json =JSON.parse(JSON.stringify(result));
    });
    */
});