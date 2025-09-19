(function () {
  const overlayId = "mobile-overlay";

  function showOverlay() {
    if (!document.getElementById(overlayId)) {
      const overlay = document.createElement("div");
      overlay.id = overlayId;
      Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "#000",
        color: "#fff",
        FontFace: "Inter",
        fontSize: "28px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        zIndex: "99999",
        whiteSpace: "pre-line",
      });
      overlay.innerText = "No mobile responsive.\nI’m have a life.";
      document.body.appendChild(overlay);
    }
  }

  function hideOverlay() {
    const overlay = document.getElementById(overlayId);
    if (overlay) overlay.remove();
  }

  function checkSize() {
    if (window.innerWidth <= 768) {
      showOverlay();
    } else {
      hideOverlay();
    }
  }

  // 初始检测
  checkSize();
  // 窗口实时变化检测
  window.addEventListener("resize", checkSize);
})();
