import path from 'path'; //ensure we don't try to precompile core modules
import test from '../../../';
import dep1 from './dep1';

test(t => {
	t.is(dep1, 'foobar');
});
