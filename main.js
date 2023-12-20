"use strict"


var product_name = document.querySelector("#Product_input");
console.log(product_name.value);
var amount = document.querySelector("#amount_input");
var sub_btn = document.querySelector("#submit_Btn");
console.log(product_name,amount,sub_btn);
var Invalid_para1=document.querySelector("#check1");
var Invalid_para2=document.querySelector("#check2");


var emp_div = document.querySelector("#dis_none");

var total_cal = document.querySelector(".total_div");
var amount_total = document.querySelector("#cal");
var value = 0
sub_btn.addEventListener("click",(event)=>{
    event.preventDefault()
    let product_name_value = product_name.value.trim();
    let amount_value = parseInt(amount.value.trim());

    if(product_name_value == "" || amount_value == ""){
        Invalid_para1.classList.toggle("invalid1");
        Invalid_para2.classList.toggle("invalid2");
    }
    else if(product_name_value == "" ){
        Invalid_para1.classList.add("invalid1");
    }
    else if(amount_value == ""){
        Invalid_para2.classList.toggle("invalid2");
    }
    else{

        let emp_div2 = document.createElement("div")
            emp_div2.id="emp"
        let Para_left = document.createElement("h5");
            Para_left.class="para"
        let Para_right = document.createElement("h5");
            Para_right.id="para2"
        var del_btn=document.createElement("span");
            del_btn.innerHTML = `<i class="fa-solid fa-trash"></i>`
            del_btn.id="del_row"
           

        Para_left.innerText=product_name_value;
        Para_right.innerText=amount_value;
        emp_div2.append(Para_left,Para_right,del_btn);
        emp_div.append(emp_div2)
        
        total_cal.classList.add("total_div2");
        value +=amount_value ;
        amount_total.innerText=value;

        del_btn.addEventListener("click",()=>{

            console.log("hello");
           if (confirm("Do you remove the "+ product_name_value + " row")) {
           del_btn.parentElement.remove();
           
           value -=amount_value ;
           amount_total.innerText=value;
        }
       })
      
   
    }
    


    

  
    setTimeout(() => {
        Invalid_para1.classList.remove("invalid1");
        Invalid_para2.classList.remove("invalid2");
    
    }, 1000);
})









