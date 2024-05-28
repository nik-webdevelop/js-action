import * as core from '@actions/core';
import * as github from '@actions/github';

try {
    const name = core.getInput('name');
    const a = core.getInput('a');
    const b = core.getInput('b');
    console.log(name, a, b);

    const sum = parseInt(a) + parseInt(b);
    core.setOutput('sum-result', sum);

    console.log(github.context);
    console.log(JSON.stringify(github.context.payload));
} catch (error) {
    core.setFailed(error)
}