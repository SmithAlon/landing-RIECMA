export function setupNav() {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  // Close menu when clicking a link
  const mobileLinks = mobileMenu?.getElementsByTagName('a');
  Array.from(mobileLinks || []).forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
    });
  });
}