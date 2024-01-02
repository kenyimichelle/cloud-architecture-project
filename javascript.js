$(document).ready(function(){
    
var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

$(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
});

$(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
});


$(".submit").click(function(){
    return false;
})
   



/* $(document).ready(function() {
document.getElementById("dropdownA").addEventListener("change", function() {
    var selectedoption = this.value;
    var dropdowns = [
        document.getElementById("dropdown1"),
        document.getElementById("dropdown2"),
        document.getElementById("dropdown3"),
        document.getElementById("dropdown4"),
        document.getElementById("dropdown5"),
        document.getElementById("dropdown6"),
        document.getElementById("dropdown7"),
        document.getElementById("dropdown8"),
        document.getElementById("dropdown9"),
    ];
    dropdowns.forEach(function(dropdown) {
        dropdown.style.display = "none";
      });

        if (selectedoption === "option1"){
            dropdowns[0].style.display = "block";
        }
        else if (selectedoption === "option2"){
            dropdowns[1].style.display = "block";
          }
          else if(selectedoption === "option3"){
            dropdowns[2].style.display = "block";
          }
          else if(selectedoption === "option4"){
            dropdowns[3].style.display = "block";
          }
          else if(selectedoption === "option5"){
            dropdowns[4].style.display = "block";
          }
          else if (selectedoption === "option6"){
            dropdowns[5].style.display = "block";
          }
          else if (selectedoption === "option7"){
            dropdowns[6].style.display = "block";
          }
          else if (selectedoption === "option8"){
            dropdowns[7].style.display = "block";
          }
          else if (selectedoption === "option9"){
            dropdowns[8].style.display = "block";
          }
          else  {
            console.log("pick an option")
          }
        })
})
})
*/
$(document).ready(function() {
    $("#dropdownA").on("change", function() {
      var selectedOption = $(this).val();
      $(".sub-dropdown").hide();  // Hide all sub-dropdowns
  
      if (selectedOption === "option1") {
        $("#dropdown1").show();  // Show dropdown1
      } else if (selectedOption === "option2") {
        $("#dropdown2").show();  // Show dropdown2
      }
      else if (selectedOption === "option3") {
        $("#dropdown3").show();  // Show dropdown3
      }
      else if (selectedOption === "option4") {
        $("#dropdown4").show();  // Show dropdown4
      }
      else if (selectedOption === "option5") {
        $("#dropdown5").show();  // Show dropdown5
      }
      else if (selectedOption === "option6") {
        $("#dropdown6").show();  // Show dropdown6
      }
      else if (selectedOption === "option7") {
        $("#dropdown7").show();  // Show dropdown7
      }
      else if (selectedOption === "option8") {
        $("#dropdown8").show();  // Show dropdown8
      }
      else if (selectedOption === "option9") {
        $("#dropdown9").show();  // Show dropdown9
      }
    });
  });
})