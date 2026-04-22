// Tab Navigation
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;

      // Remove active class from all tabs and panels
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      // Add active class to clicked tab and corresponding panel
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Version Sub-tabs
  const subtabBtns = document.querySelectorAll('.subtab-btn');
  const subtabPanels = document.querySelectorAll('.version-subpanel');

  subtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const versionId = btn.dataset.version;

      // Remove active class from all subtabs and panels
      subtabBtns.forEach(b => b.classList.remove('active'));
      subtabPanels.forEach(p => p.classList.remove('active'));

      // Add active class to clicked subtab and corresponding panel
      btn.classList.add('active');
      document.getElementById(versionId).classList.add('active');
    });
  });
});
