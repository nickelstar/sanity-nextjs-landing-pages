export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e94d1a1e84c8a7c414bfef6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ia1n6pnb',
                  apiId: 'c92737cf-15e8-4634-9f44-1c121cacbcfe'
                },
                {
                  buildHookId: '5e94d1a2403c9bb011593847',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-96vwfbs5',
                  apiId: 'bb564cf9-c4ce-489e-b9d4-0c0c17f8f6c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickelstar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-96vwfbs5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
