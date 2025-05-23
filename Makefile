install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gsd:
	node bin/brain-gsd.js 

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js
	
publish:
	npm publish --dry-run

lint:
	npx eslint .
