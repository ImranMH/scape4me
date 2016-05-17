var should = require('chai').should(),
	scape4me =require ('../index'),
	escape = scape4me.escape,
	unscape = scape4me.unscape;

describe('#escape', function(){
	it(' convert & into &amp;', function() {
		escape('&').should.equal('&amp;');
	});

	it(' convert " into &quot;', function() {
		escape('"').should.equal('&quot;');
	});

	it(' convert \' into &#39;', function() {
		escape("'").should.equal('&#39;');
	});

	it(' convert < into &lt;', function() {
		escape("<").should.equal('&lt;');
	});

	it(' convert > into &gt;', function() {
		escape(">").should.equal('&gt;');
	});

});

describe('#unscape', function() {
	it('convert &amp; into &', function() {
		unscape('&amp;').should.equal('&')
	});

	it('convert &quot; into " ', function() {
		unscape('&quot;').should.equal('"')
	});

	it('convert &#39; into \'', function() {
		unscape('&#39;').should.equal("'")
	});

	it('convert &lt; into <', function() {
		unscape('&lt;').should.equal('<')
	});

	it('convert &gt; into >', function() {
		unscape('&gt;').should.equal('>')
	});
})