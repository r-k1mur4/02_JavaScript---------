'use strict';

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      const dds = document.querySelectorAll('dd');

      dds.forEach(dd => {
        if (dd.parentNode !== dt.parentNode) {
          dd.parentNode.classList.remove('appear');
        }
      });
    });
  });
}
