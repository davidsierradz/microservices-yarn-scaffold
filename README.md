## Description

A basic monorepo template to bootstrap a javascript-centric microservices architecture with yarn workspaces and docker:

```
 +-----------+       +-------------+       +-----------+
 |           |       |             |       |           |
 | service-a +-------+   adminer   +-------+ service-b |
 |    db     |       |             |       |    db     |
 +-----+-----+       +-------------+       +-----+-----+
       |                                         |      
       |                                         |      
       |                                         |      
       |                                         |      
 +-----+-----+                             +-----+-----+
 |           |                             |           |
 | service-a +----------+------------------+ service-b |
 |           |          |                  |           |
 +-----------+          |                  +-----------+
                        |
                        |
                  +-----+-----+
                  |           |
                  | frontend  |
                  |           |
                  +-----------+
```

### service-a-db, service-b-db and adminer

Two PostgreSQL and an adminer docker containers

### service-a and service-b

Two projects with Node.js

### frontend

A project scaffolded with create-react-app

## Installation

```bash
./scripts/install-local-environment
```

## License

MIT © [David Sierra](https://github.com/davidsierradz)
