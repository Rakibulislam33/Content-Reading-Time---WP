jQuery(document).ready(function ($) {
	// let animationSpeedWithoutMs = parseInt(dnxte_text_animation_obj.dnxte_text_animation_speed.replace('ms',''));
	// let animationDelayWithoutMs = parseInt(dnxte_text_animation_obj.dnxte_text_animation_delay.replace('ms',''));

	// //set animation timing
	// var animationDelay = animationDelayWithoutMs,
	// 	//loading bar effect
	// 	barAnimationDelay = 3800,
	// 	barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
	// 	//letters effect
	// 	lettersDelay = animationDelayWithoutMs,//50,
	// 	//type effect
	// 	typeLettersDelay = animationDelayWithoutMs,//150,
	// 	selectionDuration = 500,
	// 	typeAnimationDelay = animationDelayWithoutMs,//selectionDuration + 800,
	// 	//clip effect 
	// 	revealDuration = 600,
	// 	revealAnimationDelay = animationDelayWithoutMs;//1500;

	initHeadline();


	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.dnxt-headline.letters').find('b'));
		// console.log('single');
		//initialise headline animation
		animateHeadline($('.dnxt-headline'));
	}

	function singleLetters($words) {
		$words.each(function () {
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
			}
			var newLetters = letters.join('');
			word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		// var duration = animationDelay;
		$headlines.each(function () {
		
			var headline = $(this);
			let delay = parseInt(headline[0]?.dataset.animation_delay);
			let speed = parseInt(headline[0]?.dataset.animation_speed);
			
			// barWaiting = headline[0].animation_delay - headline[0].animation_speed;
			if (headline.hasClass('loading-bar')) {
				// duration = barAnimationDelay;
				setTimeout(function () { headline.find('.dnxt-words-wrapper').addClass('is-loading') }, speed);
			} else if (headline.hasClass('clip')) {
				var spanWrapper = headline.find('.dnxt-words-wrapper'),
					newWidth = spanWrapper.width() + 60;
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type')) {
				//assign to .dnxt-words-wrapper the width of its longest word
				var words = headline.find('.dnxt-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width() + 70;
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.dnxt-words-wrapper').css('width', width);
			}
			//trigger animation
			if ('loop' == headline[0]?.dataset.animation_repeat) {
				setTimeout(function () { hideWord(headline.find('.is-visible').eq(0),speed,delay) }, delay);
			}

		});
	}

	function hideWord($word, speed, delay) {
		// console.log('speed',speed);
		var nextWord = takeNext($word);

		if ($word.parents('.dnxt-headline').hasClass('type')) {
			var parentSpan = $word.parent('.dnxt-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');
			setTimeout(function () {
				parentSpan.removeClass('selected');
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, speed);
			setTimeout(function () { showWord(nextWord,speed, delay) }, delay);

		} else if ($word.parents('.dnxt-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool,speed, delay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, speed,delay);

		} else if ($word.parents('.dnxt-headline').hasClass('clip')) {
			$word.parents('.dnxt-words-wrapper').animate({ width: '2px' }, speed, function () {
				switchWord($word, nextWord);
				showWord(nextWord,speed, delay);
			});

		} else if ($word.parents('.dnxt-headline').hasClass('loading-bar')) {
			$word.parents('.dnxt-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function () { hideWord(nextWord,speed, delay) }, delay);
			setTimeout(function () { $word.parents('.dnxt-words-wrapper').addClass('is-loading') }, speed);

		} else {
			switchWord($word, nextWord);
			setTimeout(function () { hideWord(nextWord,speed, delay) }, delay);
		}
	}

	function showWord($word, duration,revealAnimationDelay) {
		if ($word.parents('.dnxt-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, duration,revealAnimationDelay);
			$word.addClass('is-visible').removeClass('is-hidden');

		} else if ($word.parents('.dnxt-headline').hasClass('clip')) {
			$word.parents('.dnxt-words-wrapper').animate({ 'width': $word.width() + 10 }, duration, function () {
				setTimeout(function () { hideWord($word,duration,revealAnimationDelay) }, revealAnimationDelay);
			});
		}
	}

	function hideLetter($letter, $word, $bool, duration,animationDelay) {
		$letter.removeClass('in').addClass('out');

		if (!$letter.is(':last-child')) {
			setTimeout(function () { hideLetter($letter.next(), $word, $bool, duration,animationDelay); }, duration);
		} else if ($bool) {
			setTimeout(function () { hideWord(takeNext($word),duration,animationDelay) }, animationDelay);
		}

		if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		}
	}

	function showLetter($letter, $word, $bool, duration,delay) {
		$letter.addClass('in').removeClass('out');

		if (!$letter.is(':last-child')) {
			setTimeout(function () { showLetter($letter.next(), $word, $bool, duration,delay); }, duration);
		} else {
			if ($word.parents('.dnxt-headline').hasClass('type')) { setTimeout(function () { $word.parents('.dnxt-words-wrapper').addClass('waiting'); }, 200); }
			if (!$bool) { setTimeout(function () { hideWord($word,duration,delay) }, duration) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});