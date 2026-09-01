(() => {
  const chapterGroups = document.querySelectorAll("[data-video-chapters]");

  chapterGroups.forEach((group) => {
    const videoId = group.getAttribute("data-video-chapters");
    const video = videoId ? document.getElementById(videoId) : null;
    const buttons = [...group.querySelectorAll("[data-video-time]")];

    if (!(video instanceof HTMLVideoElement) || buttons.length === 0) return;

    const setActiveChapter = (activeButton) => {
      buttons.forEach((button) => {
        const isActive = button === activeButton;
        button.classList.toggle("is-active", isActive);
        if (isActive) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const nextTime = Number(button.getAttribute("data-video-time"));
        if (!Number.isFinite(nextTime)) return;

        video.currentTime = nextTime;
        setActiveChapter(button);
        video.play().catch(() => {});
      });
    });

    video.addEventListener("timeupdate", () => {
      const activeButton = buttons.reduce((current, button) => {
        const chapterTime = Number(button.getAttribute("data-video-time"));
        return Number.isFinite(chapterTime) && chapterTime <= video.currentTime ? button : current;
      }, buttons[0]);

      setActiveChapter(activeButton);
    });

    setActiveChapter(buttons[0]);
  });

  document.querySelectorAll("[data-video-demo]").forEach((disclosure) => {
    const videoId = disclosure.getAttribute("data-video-demo");
    const video = videoId ? document.getElementById(videoId) : null;

    if (!(disclosure instanceof HTMLDetailsElement) || !(video instanceof HTMLVideoElement)) return;

    disclosure.addEventListener("toggle", () => {
      if (!disclosure.open) video.pause();
    });
  });
})();
