// import { useEffect } from 'react';
// import styled from 'styled-components';

// const AnimatedCursor = () => {
//   useEffect(() => {
//     const cursor = document.createElement('div');
//     const trail = document.createElement('div');

//     cursor.classList.add('cursor');
//     trail.classList.add('cursor-trail');

//     // Append the elements to the body
//     document.body.appendChild(cursor);
//     document.body.appendChild(trail);

//     const updateCursorPosition = (e) => {
//       const x = e.clientX;
//       const y = e.clientY;

//       // Update cursor position
//       cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
//       cursor.style.top = `${y - cursor.offsetHeight / 2}px`;

//       // Update trail position
//       trail.style.left = `${x - trail.offsetWidth / 2}px`;
//       trail.style.top = `${y - trail.offsetHeight / 2}px`;

//       // Fade out the trail
//       trail.style.opacity = '1';
//       setTimeout(() => {
//         trail.style.opacity = '0';
//       }, 200); // Set the delay before trail fades
//     };

//     document.addEventListener('mousemove', updateCursorPosition);

//     return () => {
//       document.removeEventListener('mousemove', updateCursorPosition);
//     };
//   }, []);

//   return null;
// };

// const Cursor = styled.div`
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   background-color: violet; /* Neon color */
//   border-radius: 50%;
//   pointer-events: none;
//   transition: transform 0.1s ease-in-out;
//   box-shadow: 0 0 10px violet, 0 0 20px violet; /* Neon glow */
//   z-index: 9999;
// `;

// const CursorTrail = styled.div`
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   background-color: violet; /* Neon color */
//   border-radius: 50%;
//   opacity: 0.5;
//   pointer-events: none;
//   transition: opacity 0.5s ease-out;
//   z-index: 9999;
// `;

// export default AnimatedCursor;
