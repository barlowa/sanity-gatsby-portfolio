export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dbeee677c00cd0cb386f7dc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vwac1r9g',
                  apiId: 'c1957d12-e429-48ea-8513-6fc2149f3bf1'
                },
                {
                  buildHookId: '5dbeee67564670a36eb7e186',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z3ibg8wu',
                  apiId: '11d5f663-8a16-4427-be85-72a125ed8c90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barlowa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z3ibg8wu.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
