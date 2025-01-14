import smokeGif from '../assets/smoke.gif';

export default function renderSmokeGif(x, y) {
  const smoke = document.createElement('img');
  smoke.src = smokeGif;
  smoke.style.position = 'absolute';
  smoke.style.left = `${x}px`;
  smoke.style.top = `${y}px`;
  smoke.style.pointerEvents = 'none';
  smoke.style.width = '50px';
  document.body.appendChild(smoke);
  setTimeout(() => smoke.remove(), 2000); // Remove after 2 seconds
}
