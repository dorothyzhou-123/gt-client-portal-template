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

  // Version Sub-tabs (for Video Versions tab)
  const versionSubtabBtns = document.querySelectorAll('.version-subtabs .subtab-btn');
  const versionSubpanels = document.querySelectorAll('.version-subpanel');

  versionSubtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const versionId = btn.dataset.version;

      // Remove active class from all version subtabs and panels
      versionSubtabBtns.forEach(b => b.classList.remove('active'));
      versionSubpanels.forEach(p => p.classList.remove('active'));

      // Add active class to clicked subtab and corresponding panel
      btn.classList.add('active');
      document.getElementById(versionId).classList.add('active');
    });
  });

  // Storyboard Sub-tabs
  const storyboardSubtabBtns = document.querySelectorAll('[data-storyboard]');
  const storyboardSubpanels = document.querySelectorAll('.storyboard-subpanel');

  storyboardSubtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const storyboardId = btn.dataset.storyboard;

      // Remove active class from all storyboard subtabs and panels
      storyboardSubtabBtns.forEach(b => b.classList.remove('active'));
      storyboardSubpanels.forEach(p => p.classList.remove('active'));

      // Add active class to clicked subtab and corresponding panel
      btn.classList.add('active');
      document.getElementById(`storyboard-${storyboardId}`).classList.add('active');
    });
  });
});
