document.addEventListener('DOMContentLoaded', (event) => {
  if (document.documentElement.scrollTop > 1800 && !isShowedProjects) {

    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/projects.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        isShowedProjects = true;

        projects = data;
        renderProjects();
      });
  }

  if (document.documentElement.scrollTop > 3600 && !isShowedOtherProjects) {

    fetch('https://nguyenthienly.github.io/MY_PROFILE/data/otherProjects.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        isShowedOtherProjects = true;

        otherProjects = data;
        renderOtherProjects();
      });
  }
});

document.addEventListener('scroll', (event) => {
  console.log("isShowedProjectsaadffa", isShowedProjects)
  setTimeout(() => {
    if (document.documentElement.scrollTop > 1800 && !isShowedProjects) {
      console.log("isShowedProjectsaada", isShowedProjects)
      fetch('https://nguyenthienly.github.io/MY_PROFILE/data/projects.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          isShowedProjects = true;
          console.log("isShowedProjectsbbbb", isShowedProjects)

          projects = data;
          renderProjects();
        });
    }

    if (document.documentElement.scrollTop > 3600 && !isShowedOtherProjects) {
      console.log("isShowedOtherProjectsccfffcc", isShowedOtherProjects)
      fetch('https://nguyenthienly.github.io/MY_PROFILE/data/otherProjects.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          isShowedOtherProjects = true;
          console.log("isShowedOtherProjectscccc", isShowedOtherProjects)

          otherProjects = data;
          renderOtherProjects();
        });
    }
  }, 1000)
});