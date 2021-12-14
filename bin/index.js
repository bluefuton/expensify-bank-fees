#!/usr/bin/env node

import prompt from 'prompt';
import chalk from 'chalk';

prompt.start();

prompt.get(['report_title', 'expected_amount_nzd', 'received_amount_nzd'], function (err, result) {
    if (err) { return onErr(err); }
    const outputText = `Bank fees for ${result.report_title} expenses. Expected $241.45, received around $219.45.`;
    console.log( chalk.yellow.bold( outputText ) );
});

function onErr(err) {
    console.log(err);
    return 1;
}
