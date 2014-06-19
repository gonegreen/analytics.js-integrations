
SRC= $(wildcard *.js lib/*/*.js test/*.js)
REQUIRES= integrations.js test/tests.js
tests ?= *
BINS= node_modules/.bin
DUO= $(BINS)/duo
TEST= http://localhost:4202
BROWSERS= ie10

PHANTOM= $(BINS)/mocha-phantomjs \
	--setting local-to-remote-url-access=true \
	--setting web-security=false \
	--path $(BINS)/phantomjs

build: node_modules $(SRC) $(REQUIRES)
	@$(DUO) --development test/index.js build/build.js

integrations.js:
	@node bin/integrations

test/tests.js:
	@node bin/tests

kill:
	-@test -e test/pid.txt \
		&& kill `cat test/pid.txt` \
		&& rm -f test/pid.txt

node_modules: package.json
	@npm install

server: build
	@node test/server &> /dev/null &
	@sleep 1

test: build server
	@$(PHANTOM) $(TEST)

test-browser: build server
	@open $(TEST)

test-coverage: build server
	@open $(TEST)/coverage

test-sauce: build server
	@BROWSERS=$(BROWSERS) node bin/gravy --url $(TEST)

clean:
	rm -rf components build

.PHONY: clean server test test-browser
.PHONY: test-sauce test-coverage
