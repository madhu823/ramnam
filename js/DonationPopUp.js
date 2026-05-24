var Donation_maincontainer = document.getElementById('DonationPopUpbtn');
        
       
        window.onclick = function(event) {
            if (event.target == Donation_maincontainer) {
                Donation_maincontainer.style.display = "none";
            }
        }





// var Donation_modal = document.getElementById("myDonModal");
    
//     // Get the button that opens the modal
//     var btn = document.getElementById("DonationPopUpbtn");
    
//     // Get the <span> element that closes the modal
//       var span = document.getElementsByClassName("closePopUp")[0];
      
//       // When the user clicks the button, open the modal 
//       btn.onclick = function () {
//         Donation_modal.style.display = "block";
//       }
      
//       // When the user clicks on <span> (x), close the modal
//         span.onclick = function () {
//           Donation_modal.style.display = "none";
//         }
        
//         // When the user clicks anywhere outside of the modal, close it
//         window.onclick = function (event) {
//           if (event.target == Donation_modal) {
//             Donation_modal.style.display = "none";
//           }
//         }