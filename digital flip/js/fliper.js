var result,userchoice;
var resetHTML='<div class="tail"><img src="images/tail.png"></div><div class="head"><img src="images/head.png" ></div>';
function resetAll(){
	setTimeout(function(){
			$('.coinBox').fadeOut('slow',function(){
				$(this).html(resetHTML)
			}).fadeIn('slow',function(){
				$('#btnFlip').removeAttr('disabled');
			});
		},3000);
}


$(document).on('change','#userchoice',function(){
	userchoice=$(this).val();
	if (userchoice=="") {
		$(this).parent('p').prepend("<span class='text text-danger'>Plese select a coin side to play the game</span>")
		$('#btnFlip').attr('disabled','disabled');
	}else{
		$('#btnFlip').removeAttr('disabled');
		$(this).siblings('span').empty();
	}
	return userchoice;
});

//final result

function finalResult(result,userchoice){
	var resFormat='<h3>';
	resFormat +='<span class="text text-primary">You :<u>'+userchoice+'</u></span> |';
	resFormat +='<span class="text text-danger">Result :<u>'+result+'</u></span> |';
	resFormat +='<h3>';
	var winr='<h2 class="text text-success">You Won The Game !!</h2>';
	var losr='<h2 class="text text-danger">You Lost Your Chance</h2>';
	if (result==userchoice) {
		$('.coinBox').append(resFormat+winr)
	}
	else
	{
		$('.coinBox').append(resFormat+losr)
	}

}

//result ki bari

$(document).on('click','#btnFlip',function(){
	var flipr=$('.coinBox>div').addClass('flip');
	var number=Math.floor(Math.random()*2);
	$(this).attr('disabled','disabled');
	setTimeout(function(){
		flipr.removeClass('flip');
		if (number) {
			result='head';
		$('.coinBox').html('<img src="images/head.png" height="200px" width="200px"><h3 class="text-primary">Head</h3>');
		finalResult(result,userchoice);
		resetAll();
		
	}else{
		result='tail';
		$('.coinBox').html('<img src="images/tail.png" height="200px" width="200px"><h3 class="text-primary">Tail</h3>');
		finalResult(result,userchoice);
		resetAll();
	}
	},2000);
	return false;
});