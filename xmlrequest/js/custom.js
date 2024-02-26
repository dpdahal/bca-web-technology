function getData(){
    http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          // console.log(http.responseText);
          // console.log(http.responseXML);
          var xmlDoc = http.responseXML;
          var users = xmlDoc.getElementsByTagName("user");
          // console.log(users);
          let name = users[0].getElementsByTagName("name")[0].childNodes[0].nodeValue;
          console.log(name);
        }

    };
    // http.open("GET", "js/data.txt");
    http.open("GET", "js/user.xml")
    http.send();
}

getData();