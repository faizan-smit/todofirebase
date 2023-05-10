

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
 import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";



 const firebaseConfig = {

   apiKey: "AIzaSyBjMwoBhYKmkknamyv4Jq20dVl-L1V1hOM",
   authDomain: "todo-mamamia.firebaseapp.com",
   projectId: "todo-mamamia",
   storageBucket: "todo-mamamia.appspot.com",
   messagingSenderId: "858953052323",
   appId: "1:858953052323:web:bc93f5992259b91c2a8f16",
   measurementId: "G-T7072HM5MQ"

 };


 const app = initializeApp(firebaseConfig);
 const database = getDatabase();

//   let userId = 0;
  let input = document.getElementById('maininput').value
  let list = document.getElementById('list')

  let addtodo = ()=>{

    set(ref(database, `List/ ${input}` ), {item: input});

    

      
    

  }

  let add = document.getElementById('add').addEventListener('click', addtodo())

