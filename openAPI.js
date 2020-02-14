const request = require('request');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const PMServiceKey = 'zaVctsSrXI%2Br%2F420F3emchkWQHkEv15G8h6plqD674I2f1ef35M39%2Fvum2EU9s5yV7%2Bl%2Fmj9QZntI20uOf9Tyg%3D%3D';
//const PMUrl= `http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst?sidoName=%EC%A0%84%EB%82%A8&searchCondition=HOUR&pageNo=2&numOfRows=10&ServiceKey=${PMServiceKey}`
const PMUrl = `http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst?sidoName=%EA%B4%91%EC%A3%BC&searchCondition=HOUR&numOfRows=10&ServiceKey=${PMServiceKey}`;
const weatherUrl ='http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=2917059000'

request(PMUrl,function(error,response,body){
    if(error){
      throw error;
    }
    parser.parseString(body,function(error2,result){
        if(error2){
           throw error2;
        }
        var json =JSON.parse(JSON.stringify(result));
        module.exports.PM = json.response.body[0].items[0].item[3];
    });
});

request(weatherUrl,function(error,response,body){
    if(error){
        throw error;
    }
    parser.parseString(body,function(error2,result){
        if(error2){
            throw error2;
        }
        var json2=JSON.parse(JSON.stringify(result));
        module.exports.weather=json2.rss.channel[0];
        module.exports.detailWeather=json2.rss.channel[0].item[0].description[0].body[0].data;
    });
});
