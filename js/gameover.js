
//toggle vy
/*
document.querySelector('.show-loser-btn').addEventListener('click', () => {
	document.querySelector('#lose').classList.remove('.hidden');
})

*/

document.querySelector('.show-winner-btn').addEventListener('click', function() {
    // Visa vinnarsidan och dölja gameover-sidan
    document.getElementById('win').classList.remove('hidden');
    document.getElementById('lose').classList.add('hidden');
});

document.querySelector('.show-loser-btn').addEventListener('click', function() {
    // Visa gameover-sidan och dölja vinnarsidan
    document.getElementById('lose').classList.remove('hidden');
    document.getElementById('win').classList.add('hidden');
});

//boolean funcion win/lose
function showEndScreen(isWinner, word) {
	const win = document.querySelector('#win');
	const lose = document.querySelector('#lose');
	if (isWinner) {
		document.querySelector('#win').classList.remove('hidden');
    	document.querySelector('#lose').classList.add('hidden');
	} else {
		document.querySelector('#lose').classList.remove('hidden');
    	document.querySelector('#win').classList.add('hidden');
	}
	
	//anropa function
	showEndScreen()
}
