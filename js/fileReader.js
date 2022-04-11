 function getData(type,callback){
    $.ajax({
        url : "resources/"+type+".txt",
        dataType: "text",
        success : function (data) {
            callback(data);
        }
    });
 }
function retrieveList(type,callback){
    
 getData(type,function(data){
     let fullList = [...data.split(/\n/)];
     var list = [];
     fullList.forEach(function(key,value){
        list.push(key.substring(4));
     });
    callback(type,list);
 });

 
}