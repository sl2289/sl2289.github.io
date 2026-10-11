import { useEffect, useRef, useState } from 'react';

// Gap between the bottom of the sticky top bar and a section heading after jumping to it.
const GAP = 24;

// Height of the sticky top bar (marked with data-topbar in Navigation.tsx) plus the gap.
function headerOffset() {
  const bar = document.querySelector('[data-topbar]');
  return (bar?.getBoundingClientRect().height ?? 0) + GAP;
}

/**
 * "On This Page" sidebar behaviour: tracks which section is in view, and scrolls to a
 * section so its heading sits just below the top bar.
 */
export function useSectionNav(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');
  // After a click in the sidebar, keep that item highlighted (even if the page can't scroll far
  // enough to bring it to the top) until the reader scrolls on their own.
  const pinned = useRef(false);

  useEffect(() => {
    const unpin = () => {
      pinned.current = false;
    };
    const update = () => {
      if (pinned.current) return;
      // At the very bottom the last sections can't reach the top, so highlight the last one.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActive(ids[ids.length - 1]);
        return;
      }
      const line = headerOffset() + 1;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    for (const event of ['wheel', 'touchstart', 'keydown', 'mousedown'] as const) {
      window.addEventListener(event, unpin, { passive: true });
    }
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      for (const event of ['wheel', 'touchstart', 'keydown', 'mousedown'] as const) {
        window.removeEventListener(event, unpin);
      }
    };
  }, [ids.join('|')]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset();
    setActive(id);
    // The click's own mousedown has already fired, so pinning here isn't undone by it.
    pinned.current = true;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return { active, scrollTo };
}
