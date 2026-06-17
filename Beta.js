const hamburgerbtn = document.getElementById('hamburgerBtn');
const navPanel = document.getElementById('navigation');

hamburgerbtn.addEventListener('click', () => {
	if (hamburgerbtn.classList.contains('hamburger-on')) {
		hamburgerbtn.classList.remove('hamburger-on');
		navPanel.classList.remove('navigation-open');
	} else {
		hamburgerbtn.classList.add('hamburger-on');
		navPanel.classList.add('navigation-open');
	}
});

document.addEventListener('click', (e) => {
	if (hamburgerbtn.classList.contains('hamburger-on') && !e.target.closest('#hamburger') && !e.target.closest('#navigation')) {
		hamburgerbtn.classList.remove('hamburger-on');
		navPanel.classList.remove('navigation-open');
	}
});