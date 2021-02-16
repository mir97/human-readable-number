module.exports = function toReadable (number) {
    if(number === 0) return 'zero';
    let num = [{name:"billion ",dip:9},{name:"million ",dip:6},{name:"thousand ",dip:3}];
    let str ="";
    let i=0;
 
    for(i=0;Number.length>3;i++){
        if(number.length >= (num[i].dip+1) && number.length <= (num[i].dip+3)){
            str = str+ cutNumber(Number(number.substring(0,number.length-num[i].dip))) + num[i].name;
            number = number.substring(number.length-num[i].dip,number.length);
        }
    }
    res = str+cutNumber(Number(number));
    return res.trim();
}


function cutNumber(number){
    let str = "";
    let i=0;
    let flag = false;
    let n=1;
    let arr = [{value:1,name:"one"},{value:2,name:"two"},{value:3,name:"three"},{value:4,name:"four"},{value:5,name:"five"},{value:6,name:"six"},{value:7,name:"seven"},{value:8,name:"eight"},{value:9,name:"nine"},
    {value:10,name:"ten"},{value:11,name:"eleven"},{value:12,name:"twelve"},{value:13,name:"thirteen"},{value:14,name:"fourteen"},{value:15,name:"fifteen"},{value:16,name:"sixteen"},{value:17,name:"seventeen"},{value:18,name:"eighteen"},
    {value:19,name:"nineteen"},{value:20,name:"twenty"},{value:30,name:"thirty"},{value:40,name:"forty"},{value:50,name:"fifty"},{value:60,name:"sixty"},{value:70,name:"seventy"},{value:80,name:"eighty"},{value:90,name:"ninety"}
    ];

    number = String(number).split("").reverse().join("");
    while(i<number.length){
        if(i==2){
            str="hundred " + str;
        }
        if(i==1){
            n=10;
            for(j=0;j<arr.length;j++){
                
                if((Number(number[0])+Number(number[i]*n))==arr[j].value){
                    str= arr[j].name;
                    flag=true;
                }
            }
        }
        if(flag!=true){
            for(j=0;j<arr.length;j++){
                if(arr[j].value==Number(number[i])*n){
                    str= arr[j].name+" " + str;
                }
            }  
        }  
        n=1;
        i++;
        flag=false;
    }
    return str;
};


