// Tab Navigation - Premium lightweight tabs
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanels = document.querySelectorAll('.tab-panel');

  // Tab click handler
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.dataset.section;

      // Remove active class from all tabs and panels
      navItems.forEach(n => n.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      // Add active class to clicked tab and corresponding panel
      item.classList.add('active');
      document.getElementById(sectionId).classList.add('active');
    });
  });

  // Version Sub-tabs (for Video Versions tab)
  const versionSubtabBtns = document.querySelectorAll('.version-subtabs .subtab-btn');
  const versionSubpanels = document.querySelectorAll('.version-subpanel');

  versionSubtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const versionId = btn.dataset.version;

      versionSubtabBtns.forEach(b => b.classList.remove('active'));
      versionSubpanels.forEach(p => p.classList.remove('active'));

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

      storyboardSubtabBtns.forEach(b => b.classList.remove('active'));
      storyboardSubpanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(`storyboard-${storyboardId}`).classList.add('active');
    });
  });

  // Scroll to top when tab changes (optional - for better UX)
  const tabContent = document.querySelector('.tab-content');
  if (tabContent) {
    tabContent.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-item')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
});
