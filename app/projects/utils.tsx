// app/projects/utils.js

export function getProjects() {
    // This function should return an array of project objects.
    return [
      {
        slug: 'project-one',
        metadata: {
          title: 'Project One',
          publishedAt: '2023-01-01',
          summary: 'A detailed overview of Project One.',
          image: '/assets/project-one.jpg',
        },
        content: 'Detailed content here...',
      },
      {
        slug: 'project-two',
        metadata: {
          title: 'Project Two',
          publishedAt: '2023-02-01',
          summary: 'A detailed overview of Project Two.',
          image: '/assets/project-two.jpg',
        },
        content: 'Detailed content here...',
      },
    ];
  }
  