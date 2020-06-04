export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed87f69ae2014553310248d',
                  title: 'Sanity Studio',
                  name: 'blog-studio-i7h2fwa6',
                  apiId: '348509fe-696b-400d-8fc6-61a048d65941'
                },
                {
                  buildHookId: '5ed87f696616f7bdccd842b7',
                  title: 'Blog Website',
                  name: 'blog-web-b75udmwp',
                  apiId: 'edf5b1e9-97a6-4aa0-aa9a-b2e4d0143e98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ihatesudo/blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-web-b75udmwp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
