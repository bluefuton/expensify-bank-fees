#!/usr/bin/env node

import prompt from 'prompt';
import chalk from 'chalk';

prompt.start();

prompt.get(['report_title', 'expected_amount_usd', 'received_amount_usd'], function (err, result) {
    if (err) { return onErr(err); }
    const outputText = `Bank fees for ${result.report_title} expenses. Expected $${result.expected_amount_usd}, received around $${result.received_amount_usd}.`;
    console.log( chalk.yellow.bold( outputText ) );
    console.log( 'Amount to expense: $' + ( result.expected_amount_usd - result.received_amount_usd ).toFixed(2) + ' USD')
});

function onErr(err) {
    console.log(err);
    return 1;
}
