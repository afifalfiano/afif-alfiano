const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Afif Alfiano',
    site_url: 'https://afif-alfiano.vercel.app',
    feed_url: 'https://afif-alfiano.vercel.app/feed.html'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', '_posts'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', '_posts', name)
      )
      const frontmatter = matter(content)
      console.log(frontmatter.data, 'fs');
      feed.item({
        title: frontmatter.data.title,
        url: '/posts/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.excerpt,
        author: frontmatter.data.author
      })
    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
