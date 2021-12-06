function corona()
            {
                alert("Due to COVID-19, we have changed the global schedule. Have a look at our new policies and terms & guidelines");
            }
            function submission()
            {
                alert("Your Response has been recorded! Thank you for subscribing our Newsletter!");
            }
var i = 0;
var images = [];
var time = 5000;
images[0] = '../images/aboutusimages/fleet_1.png';
images[1] = '../images/aboutusimages/fleet_2.png';
images[2] = '../images/aboutusimages/fleet_3.png';
images[3] = '../images/aboutusimages/fleet_4.png';
images[4] = '../images/aboutusimages/fleet_5.png';
images[5] = '../images/aboutusimages/fleet_6.png';
images[6] = '../images/aboutusimages/fleet_7.png';
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
