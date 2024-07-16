document.addEventListener('DOMContentLoaded', function() {
	const navBtn = document.getElementById('navBtn');
	const mainNav = document.getElementById('mainNav');

	navBtn.addEventListener('click', function() {
		mainNav.classList.toggle('open');
	});

	// Плавный скролл по клику на ссылки
	document.querySelectorAll('.menu-list-link').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();

			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});

				// Скрыть меню на маленьких экранах после клика
				if (window.innerWidth <= 800) {
					mainNav.classList.remove('open');
				}
			}
		});
	});

	document.querySelectorAll('footer .footer-col ul li a').forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();

			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});

	const testimonialImages = document.querySelectorAll('.testimonial-block-right-bottom-image');

	testimonialImages.forEach(image => {
		image.addEventListener('click', function() {
			const videoId = this.getAttribute('data-video-id');
			const iframeSrc = `https://www.youtube.com/embed/${videoId}/?controls=1`;

			const iframe = document.getElementById('testimonial-video');

			iframe.src = iframeSrc;

		});
	});

	const teacherItems = document.querySelectorAll('.our-expert-teachers-body-item');

	teacherItems.forEach(item => {
		item.addEventListener('click', function() {
			// Убираем класс active у всех элементов
			teacherItems.forEach(item => {
				item.classList.remove('active');
			});

			// Добавляем класс active только к текущему элементу
			this.classList.add('active');
		});
	});

	const mapsIcons = document.querySelectorAll('.maps-icons-items img'); // Получаем все иконки карт

	mapsIcons.forEach(icon => {
		icon.addEventListener('click', function() {
			const targetClass = this.parentNode.classList[1]; // Получаем класс родительского элемента (yandex, google, 2gis)
			const maps = document.querySelectorAll('.maps > div'); // Получаем все карты

			maps.forEach(map => {
				map.style.display = 'none'; // Скрываем все карты
			});

			const selectedMap = document.querySelector(`.map-${targetClass}`); // Выбираем нужную карту
			selectedMap.style.display = 'block'; // Показываем выбранную карту
		});
	});

	const modal = document.querySelector('.modal');
	const getStartedBtn = document.querySelector('.appointment .btn-primary');
	const getStartedBtn2 = document.querySelector('.btn-banner-left');
	const getStartedBtn3 = document.querySelector('.banner-bottom-text .btn-primary');
	const closeBtn = document.querySelector('.btn-close');
	const overlay = document.querySelector('.overlay');

	getStartedBtn.addEventListener('click', function() {
		modal.classList.add('show');
	});

	getStartedBtn2.addEventListener('click', function() {
		modal.classList.add('show');
	});

	getStartedBtn3.addEventListener('click', function() {
		modal.classList.add('show');
	});

	closeBtn.addEventListener('click', function() {
		modal.classList.remove('show');
	});

	overlay.addEventListener('click', function() {
		modal.classList.remove('show');
	});
});
