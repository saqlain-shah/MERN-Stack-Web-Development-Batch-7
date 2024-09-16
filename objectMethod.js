const student = {
    name : {
      a : ["akhtar","akram",'ahmad'],
      b : ["baqir","bashir","bahadur"],
      c : "cumming",
      d : ["dilawar","dilshair","dawood"],
      e : "enayat",
      f : "fayyaz",
      g : "gulzaar",
      h : "hamid",
      i : "iftikhar",
      j : ["jaffer","javed","jamshad"],
      k : "kamran",
      l : "liaqat",
    },
    phNo : {
      scom : 35543233,
      telenor : 34567567,
      ufone : 31455333
    }
    }

    // object keys
    const key = Object.keys(student.name);

    console.log("object keys : ",key);  



    // object values

    const value = Object.values(student.name);

    console.log("object values : ",value); 
    
    


      // object entries

      const entries = Object.entries(student.name);

      console.log("object entries : ",entries); 



      // object asign

      const assign = Object.assign(student.name,student.phNo);

      console.log("object asign : ",assign); 

      
   


         // object freeze

         const freeze = Object.freeze(student.phNo);
         freeze.scom= 66666666;
         console.log("object freeze : ",freeze); 
   
    


          // object seal

         const added = Object.seal(student.phNo);
         added.scom="sjfsdl";
         console.log("object seal : ",added); 
        