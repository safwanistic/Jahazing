		var i = 0;
		var images = [];
		var time = 3000;
		images[0] ='images/images/slide66.jpg';
		images[1] ='images/images/fpb.jpg';
		images[2] ='images/images/rxtyvgo30rk51.png';
		images[3] ='images/images/slide65.jpg';
		function changeImg() {
			document.slide.src = images[i];
			if (i < images.length -1)
			{
				i++;
			}
			else
			{
				i=0;
			}
			setTimeout("changeImg()",time);
		}
		window.onload = changeImg;

		function myFunction() {
			var Answer = window.prompt("Do you want to book your ticket?");
			if (Answer == "yes") {
				window.alert("Thank you for your purchase");
			}
		}
    function function_name() {
      var email = document.getElementById('email_holder').value;
      if (email !="") {
        alert("You will be updated");
      }
      else {
      	alert("Enter your email");
      }
    }