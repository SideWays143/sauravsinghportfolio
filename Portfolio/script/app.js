"use strict";

$(document).ready(()=>{
	
    //Form submit event
    $(".contactForm").submit( (event)=>{
        

        //alert message to indicate that message send successfully.
		$(".alert").text("Thank you! I will reach out to you shortly.")

        //set timeout for message, so it dont stay on screen for too long
        setTimeout(() => {
            $(".alert").text("");
            $(".contactForm")[0].reset();
        }, 5000);

	});
	
});