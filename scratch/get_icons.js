const fs = require('fs');

async function main() {
  const map = {
    prisma: 'prisma',
    java: 'openjdk',
    sqlserver: 'microsoftsqlserver',
    javascript: 'javascript',
    html5: 'html5',
    postgresql: 'postgresql',
    docker: 'docker',
    postman: 'postman',
    nestjs: 'nestjs',
    nextjs: 'nextdotjs',
    github: 'github'
  };

  const results = {};
  for (const [key, slug] of Object.entries(map)) {
    try {
      const res = await fetch(`https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/${slug}.svg`);
      const svg = await res.text();
      const match = svg.match(/<path d="([^"]+)"/);
      if (match) {
        results[key] = match[1];
      }
    } catch (err) {
      console.error(key, err.message);
    }
  }

  fs.writeFileSync('scratch/icons.json', JSON.stringify(results, null, 2));
  console.log('Done fetching icons:', Object.keys(results));
}

main();
